import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {mkdir,writeFile} from 'node:fs/promises';

const desktopRoutes = ['accueil','module/a','module/c','module/d','module/e','quiz/a','glossaire','cartes'];
const cases = [
  ...desktopRoutes.map(route=>({route,width:1280,height:900})),
  ...['accueil','module/e'].map(route=>({route,width:390,height:844})),
];

for (const {route,width,height} of cases) {
  test(`accessibilité WCAG AA — ${route} — ${width}px`, async ({page}, testInfo) => {
    await page.setViewportSize({width,height});
    await page.goto(`./#${route}`);
    await expect(page.locator('#main')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    const results = await new AxeBuilder({page})
      .withTags(['wcag2a','wcag2aa','wcag21aa'])
      .analyze();
    if (results.violations.length) {
      await mkdir(testInfo.outputDir,{recursive:true});
      const reportPath=testInfo.outputPath('axe-violations.json');
      await writeFile(reportPath,JSON.stringify(results.violations,null,2));
      await testInfo.attach('axe-violations.json', {
        path:reportPath,
        contentType:'application/json',
      });
    }
    const summary = results.violations.map(v=>({
      rule:v.id,
      impact:v.impact,
      nodes:v.nodes.map(n=>({selectors:n.target,detail:n.failureSummary})),
    }));
    expect(summary.map(v=>`${v.rule}: ${v.nodes.length} élément(s)`), 'Détail des sélecteurs et couleurs dans axe-violations.json').toEqual([]);
  });
}
