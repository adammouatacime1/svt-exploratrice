import { test, expect } from '@playwright/test';
import { questions, finalQuestionIds } from '../js/questions.js';

const storeKey = 'svt-exploratrice-v1';
const question = id => questions.find(q => q.id === id);
async function visit(page, route = 'accueil') {
  await page.goto(`./#${route}`);
  await expect(page.locator('main h1')).toBeVisible();
}
async function solve(page, q) {
  await expect(page.locator('#quiz-prompt')).toHaveText(q.prompt);
  if (q.pairs) {
    for (const [index, pair] of q.pairs.entries()) {
      await page.locator(`[data-item="${index}"]`).click();
      await page.locator(`[data-target="${q.targets.indexOf(pair.target)}"]`).click();
    }
  } else await page.locator(`[data-answer="${q.answer}"]`).click();
  await expect(page.locator('#next-question')).toBeVisible();
}
async function slide(page, selector, value) {
  await page.locator(selector).evaluate((element, nextValue) => {
    element.value = String(nextValue);
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }, value);
}

test('toutes les pages se chargent sous le chemin du dépôt sans erreur JS ni asset manquant', async ({ page }) => {
  const errors = [], badAssets = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) badAssets.push(`${response.status()} ${response.url()}`); });
  for (const route of ['accueil', ...['a', 'b', 'c', 'd', 'e'].map(id => `module/${id}`), 'quiz/a', 'quiz/b', 'quiz/c', 'quiz/d', 'quiz/e', 'revision', 'cartes', 'glossaire', 'bilan']) {
    await visit(page, route);
  }
  await page.reload();
  await expect(page.locator('main h1')).toHaveText('Le grand bilan');
  expect(errors).toEqual([]);
  expect(badAssets).toEqual([]);
});

test('une réussite est sauvegardée, reprise et ne rapporte ses points qu’une fois', async ({ page }) => {
  await visit(page, 'quiz/a');
  await solve(page, question('a1'));
  await expect(page.locator('.points')).toContainText('10 points');
  await page.reload();
  await solve(page, question('a1'));
  await expect(page.locator('.points')).toContainText('10 points');
  await visit(page);
  await page.getByRole('link', { name: /Continuer mon exploration/ }).click();
  await expect(page).toHaveURL(/#quiz\/a$/);
  const saved = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), storeKey);
  expect(saved.correct.filter(id => id === 'a1')).toHaveLength(1);
  await solve(page, question('a1'));
  await page.locator('#next-question').click();
  await expect(page.locator('#quiz-prompt')).toHaveText(question('a2').prompt);
  await page.reload();
  await expect(page.locator('#quiz-prompt')).toHaveText(question('a2').prompt);
  await visit(page, 'accueil');
  await page.getByRole('link', { name: /Continuer mon exploration/ }).click();
  await expect(page.locator('#quiz-prompt')).toHaveText(question('a2').prompt);
});

test('toutes les questions des cinq modules affichent leur correction et les liens de notion ciblent leur exercice', async ({ page }) => {
  test.setTimeout(60000);
  for (const moduleId of ['a', 'b', 'c', 'd', 'e']) {
    await visit(page, `quiz/${moduleId}`);
    const list = questions.filter(q => q.module === moduleId);
    for (const q of list) {
      await solve(page, q);
      await expect(page.locator('#feedback')).toContainText(q.explanation);
      await page.locator('#next-question').click();
    }
    await expect(page.locator('.quiz-end')).toContainText(`${list.length} / ${list.length}`);
  }
  await expect(page.locator('.points')).toContainText(`${questions.length * 10} points`);
  await visit(page, 'module/c');
  await page.locator('.lessons a[href="#quiz/c/c3"]').click();
  await expect(page).toHaveURL(/#quiz\/c\/c3$/);
  await expect(page.locator('#quiz-prompt')).toHaveText(question('c3').prompt);
  await expect(page.locator('.quiz-top')).toContainText('DÉFI 1 SUR 1');
  await page.reload();
  await solve(page, question('c3'));
  await page.locator('#next-question').click();
  await expect(page.locator('.quiz-end')).toContainText('1 / 1');
  await expect(page.locator('.points')).toContainText(`${questions.length * 10} points`);
  // Une série achevée peut être recommencée sans rester sur la dernière question.
  await visit(page, 'quiz/c');
  await expect(page.locator('#quiz-prompt')).toHaveText(question('c1').prompt);
});

test('un indice permet une seconde tentative et les erreurs se retrouvent en révision', async ({ page }) => {
  await visit(page, 'quiz/a');
  const q = question('a1');
  const wrong = q.options.map((_, i) => i).filter(i => i !== q.answer);
  await page.locator(`[data-answer="${wrong[0]}"]`).click();
  await expect(page.locator('#feedback')).toContainText(q.hint);
  await expect(page.locator('#next-question')).toBeHidden();
  await page.locator(`[data-answer="${wrong[1]}"]`).click();
  await expect(page.locator('#feedback')).toContainText(q.explanation);
  await visit(page, 'revision');
  await expect(page.locator('#quiz-prompt')).toHaveText(q.prompt);
  await solve(page, q);
  await visit(page, 'accueil');
  await visit(page, 'revision');
  await expect(page.getByRole('heading', { name: 'Aucune question à revoir' })).toBeVisible();
});

test('classements et associations fonctionnent par sélection puis destination', async ({ page }) => {
  await visit(page, 'quiz/a');
  await solve(page, question('a1'));
  await page.locator('#next-question').click();
  const q = question('a2');
  await page.locator('[data-target="0"]').click();
  await expect(page.locator('#feedback')).toContainText('Sélectionne d’abord');
  await page.locator('[data-item="0"]').click();
  await page.locator(`[data-target="${q.targets.indexOf('Non vivant')}"]`).click();
  await expect(page.locator('#feedback')).toContainText('Indice');
  await solve(page, q);
  await expect(page.locator('#matched-list p')).toHaveCount(q.pairs.length);
  await page.locator('#next-question').click();
  await solve(page, question('a3'));
  await page.locator('#next-question').click();
  await solve(page, question('a4'));
  await expect(page.locator('#feedback')).toHaveText(question('a4').explanation);
});

test('le milieu se découvre au clavier et les comparaisons changent', async ({ page }) => {
  await visit(page, 'module/a');
  const tree = page.locator('[data-part="nature-tree"]');
  await tree.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.info-box')).toContainText('Arbre');
  await page.locator('#habitat-left').selectOption('pond');
  await page.locator('#habitat-right').selectOption('forest');
  await expect(page.locator('#habitat-table caption')).toHaveText('Comparaison : Mare et Forêt');
  await expect(page.locator('#habitat-table')).toContainText('Aquatique');
});

test('le lien d’évitement place le focus dans le contenu sans changer de route', async ({ page }) => {
  await visit(page, 'module/a');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main')).toBeFocused();
  await expect(page).toHaveURL(/#module\/a$/);
  await expect(page.locator('main h1')).toHaveText('Explorer les milieux naturels');
});

test('Berlèse propose lecture, pause, curseur et retour à l’état initial', async ({ page }) => {
  await visit(page, 'module/b');
  await page.locator('[data-play]').click();
  await expect(page.locator('[data-play]')).toHaveText('Pause');
  await expect(page.locator('input[type="range"]')).not.toHaveValue('0');
  await page.locator('[data-play]').click();
  const paused = await page.locator('input[type="range"]').inputValue();
  await page.waitForTimeout(250);
  await expect(page.locator('input[type="range"]')).toHaveValue(paused);
  await slide(page, 'input[type="range"]', 100);
  await expect(page.locator('[data-stage]')).toContainText('recueillis');
  await page.locator('[data-reset]').click();
  await expect(page.locator('input[type="range"]')).toHaveValue('0');
  await expect(page.locator('[data-stage]')).toContainText('État initial');
});

test('le microscope change d’échantillon et de grossissement ; les légendes se corrigent', async ({ page }) => {
  await visit(page, 'module/c');
  for (const zoom of [40, 400, 100]) {
    await page.locator(`[data-zoom="${zoom}"]`).click();
    await expect(page.locator('#zoom-title')).toHaveText(`Grossissement × ${zoom}`);
    await expect(page.locator(`[data-zoom="${zoom}"]`)).toHaveAttribute('aria-pressed', 'true');
  }
  await page.locator('[data-legend="plant-nucleus"]').click();
  await page.locator('#cell-buttons [data-info="plant-wall"]').click();
  await expect(page.locator('#legend-feedback')).toContainText('Indice');
  await page.locator('#cell-buttons [data-info="plant-nucleus"]').click();
  await expect(page.locator('[data-legend="plant-nucleus"]')).toBeDisabled();
  await page.locator('#specimen').selectOption('animal');
  await expect(page.locator('#cell-diagram [data-part="animal-nucleus"]')).toBeVisible();
  await expect(page.locator('#cell-diagram [data-part="plant-wall"]')).toHaveCount(0);
  await page.locator('[data-legend="animal-membrane"]').click();
  await page.locator('#cell-diagram [data-part="animal-membrane"]').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('[data-legend="animal-membrane"]')).toBeDisabled();
});

test('le laboratoire se met en pause, reprend, conclut et se réinitialise', async ({ page }) => {
  await visit(page, 'module/d');
  await expect(page.locator('[data-lab-play]')).toBeDisabled();
  await page.locator('[name="prediction"][value="down"]').check();
  await page.locator('[data-lab-play]').click();
  await expect(page.locator('[data-lab-play]')).toHaveText('Pause');
  await expect(page.locator('#oxygen-value')).not.toHaveText('21');
  await page.locator('[data-lab-play]').click();
  const paused = await page.locator('#oxygen-value').textContent();
  await page.waitForTimeout(250);
  await expect(page.locator('#oxygen-value')).toHaveText(paused);
  await page.locator('[data-lab-play]').click();
  await expect(page.locator('#lab-result')).toBeVisible({ timeout: 6000 });
  await expect(page.locator('#oxygen-value')).toHaveText('16');
  await expect(page.locator('#lime-status')).toContainText('Trouble');
  await page.locator('[data-conclusion="no"]').click();
  await expect(page.locator('#conclusion-feedback')).toContainText('Indice');
  await page.locator('[data-conclusion="yes"]').click();
  await expect(page.locator('#conclusion-feedback')).toContainText('encore');
  await page.locator('[data-lab-reset]').click();
  await expect(page.locator('#oxygen-value')).toHaveText('21');
  await expect(page.locator('#lab-result')).toBeHidden();
  await expect(page.locator('[data-lab-play]')).toBeDisabled();
  await expect(page.locator('#lime-glass')).not.toHaveClass(/cloudy/);
});

test('les quatre expériences respectent leurs unités avec réduction des animations', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await visit(page, 'module/d');
  for (const [key, initial, end, unit] of [['human', '21', '16', '%'], ['plant', '21', '19', '%'], ['fish', '8', '6', 'mg/L'], ['elodea', '8', '6,5', 'mg/L']]) {
    await page.locator('#organism').selectOption(key);
    await expect(page.locator('#oxygen-value')).toHaveText(initial);
    await expect(page.locator('#oxygen-unit')).toHaveText(unit);
    if (['plant', 'elodea'].includes(key)) await expect(page.locator('#lab-medium')).toContainText('Obscurité');
    await page.locator('[name="prediction"][value="down"]').check();
    await page.locator('[data-lab-play]').click();
    await expect(page.locator('#lab-result')).toBeVisible();
    await expect(page.locator('#oxygen-value')).toHaveText(end);
    await expect(page.locator('#lime-status')).toContainText('Trouble');
    await page.locator('[data-conclusion="yes"]').click();
    await expect(page.locator('#conclusion-feedback')).not.toBeEmpty();
    await page.locator('[data-lab-reset]').click();
    await expect(page.locator('#oxygen-value')).toHaveText(initial);
  }
});

test('les quatre structures respiratoires proposent trajet, pause, étapes et reset', async ({ page }) => {
  await visit(page, 'module/e');
  await page.locator('#route-play').click();
  await expect(page.locator('#route-play')).toHaveText('Pause du trajet');
  await page.locator('#route-play').click();
  const paused = await page.locator('#route-description').textContent();
  await page.waitForTimeout(300);
  await expect(page.locator('#route-description')).toHaveText(paused);
  await page.locator('#route-reset').click();
  await expect(page.locator('.route-step.current')).toHaveCount(0);
  for (const kind of ['human', 'grasshopper', 'plant', 'fish']) {
    await page.locator('#resp-organism').selectOption(kind);
    await page.locator('#route-next').click();
    await expect(page.locator('.route-step.current')).toHaveCount(1);
    await expect(page.locator('#route-description')).toContainText('1.');
    const total = await page.locator('.route-step').count();
    for (let i = 1; i < total; i++) await page.locator('#route-next').click();
    await expect(page.locator('#route-next')).toBeDisabled();
    await page.locator('#route-reset').click();
    await expect(page.locator('#route-next')).toBeEnabled();
  }
  await page.locator('#resp-organism').selectOption('human');
  await slide(page, '#alveolar-zoom input[type="range"]', 100);
  await expect(page.locator('#alveolar-zoom [data-stage]')).toContainText('expiré');
  await page.locator('#alveolar-zoom [data-reset]').click();
  await expect(page.locator('#alveolar-zoom input[type="range"]')).toHaveValue('0');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('#route-play').click();
  await expect(page.locator('#route-next')).toBeDisabled();
});

test('cartes recto-verso, recherche sans accents et bilan complet sont utilisables', async ({ page }) => {
  await visit(page, 'cartes');
  const first = await page.locator('.flashcard-text').textContent();
  await page.locator('#flashcard').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#flashcard')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.flashcard-text')).not.toHaveText(first);
  await page.locator('#next-card').click();
  await expect(page.locator('#card-counter')).toContainText('CARTE 2');
  await expect(page.locator('#flashcard')).toHaveAttribute('aria-pressed', 'false');
  await page.locator('#prev-card').click();
  await expect(page.locator('.flashcard-text')).toHaveText(first);
  await visit(page, 'glossaire');
  await page.locator('#glossary-search').fill('dioxygene');
  await expect(page.locator('#definitions')).toContainText('Dioxygène');
  await page.locator('#glossary-search').fill('mot-qui-nexiste-pas');
  await expect(page.locator('#search-count')).toContainText('Aucun mot');
  await visit(page, 'bilan');
  for (const id of finalQuestionIds) {
    await solve(page, question(id));
    await page.locator('#next-question').click();
  }
  await expect(page.locator('.quiz-end')).toContainText('10 / 10');
});

test('la réinitialisation demande confirmation et le site tolère un stockage indisponible', async ({ page, context }) => {
  await visit(page, 'quiz/a');
  await solve(page, question('a1'));
  await page.locator('#reset-progress').click();
  await expect(page.locator('#reset-dialog')).toBeVisible();
  await page.locator('#cancel-reset').click();
  await expect(page.locator('.points')).toContainText('10 points');
  await page.locator('#reset-progress').click();
  await page.locator('#confirm-reset').click();
  await expect(page.locator('.points')).toContainText('0 points');
  await page.reload();
  await expect(page.locator('.points')).toContainText('0 points');
  const privatePage = await context.newPage();
  await privatePage.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } });
  });
  await visit(privatePage);
  await expect(privatePage.locator('.notice')).toContainText('sauvegarde est indisponible');
  await visit(privatePage, 'quiz/a');
  await solve(privatePage, question('a1'));
  await expect(privatePage.locator('.points')).toContainText('10 points');
  await privatePage.close();
});

test('les petits écrans n’ont pas de débordement horizontal et les activités répondent au toucher', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  for (const width of [360, 390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of ['accueil', 'module/a', 'module/b', 'module/c', 'module/d', 'module/e', 'quiz/a', 'cartes', 'glossaire']) {
      await page.goto(`http://127.0.0.1:4173/svt-exploratrice/#${route}`);
      await expect(page.locator('main h1')).toBeVisible();
      const sizes = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
      expect(sizes.content, `${route} à ${width}px`).toBeLessThanOrEqual(sizes.viewport + 1);
    }
  }
  await page.goto('http://127.0.0.1:4173/svt-exploratrice/#module/a');
  await page.locator('[data-info="nature-water"]').tap();
  await expect(page.locator('.info-box')).toContainText('Eau');
  await page.goto('http://127.0.0.1:4173/svt-exploratrice/#quiz/a');
  await page.locator(`[data-answer="${question('a1').answer}"]`).tap();
  await page.locator('#next-question').tap();
  await page.locator('[data-item="0"]').tap();
  await page.locator('[data-target="0"]').tap();
  await expect(page.locator('[data-item="0"]')).toBeDisabled();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#footer-reset').tap();
  await expect(page.locator('#reset-dialog')).toBeVisible();
  await page.locator('#cancel-reset').tap();
  await expect(page.locator('.points')).toContainText('10 points');
  await page.locator('#footer-reset').tap();
  await page.locator('#confirm-reset').tap();
  await expect(page.locator('.points')).toContainText('0 points');
  await expect(page).toHaveURL(/#accueil$/);
  await context.close();
});
