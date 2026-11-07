# SVT Exploratrice

Un carnet pédagogique interactif, en français, pour découvrir les milieux naturels, les animaux du sol, les cellules et la respiration. Le site fonctionne avec des fichiers statiques : aucun serveur applicatif, compte, abonnement ou clé API n’est nécessaire.

**Source du contenu :** le programme détaillé fourni dans la demande. Les 13 photos annoncées n’étaient pas accessibles pendant la réalisation ; leur lecture et leur ordre ne sont donc pas présentés comme vérifiés. Voir [la documentation pédagogique](docs/pedagogie.md).

## Lancer le site

Avec Node.js 20 ou plus récent :

```sh
npm start
```

Le serveur de développement utilise le port `4173`. Ouvrir `http://localhost:4173` dans son navigateur. Ne pas ouvrir directement `index.html` avec `file://` : les modules JavaScript nécessitent un serveur HTTP.

Pour installer et exécuter les outils de validation :

```sh
npm ci
npm test
npm run test:e2e
```

Les tests de navigateur utilisent Playwright. Dans l’environnement cloud, Chromium est disponible dans `/usr/bin/chromium`. Sur une autre machine, installer le navigateur compatible avec `npx playwright install chromium` Le navigateur installé par Playwright est utilisé si Chromium système est absent. Un chemin particulier peut être indiqué avec `CHROMIUM_PATH=/chemin/vers/chromium npm run test:e2e`. Le site lui-même n’a aucune dépendance à installer et ne demande aucune compilation de production.

## Utiliser le carnet

- Les cinq modules proposent observations, manipulations, vocabulaire et exercices corrigés.
- Les associations et les légendes fonctionnent en sélectionnant un élément puis sa destination ; le glisser-déposer n’est pas obligatoire.
- Les erreurs donnent un indice et permettent une nouvelle tentative. Le mode révision reprend les questions ratées.
- Les cartes recto-verso et le glossaire servent aux révisions. Les fiches « L’essentiel » peuvent être imprimées avec le bouton prévu dans le carnet.
- Les simulations ont des commandes de lecture, pause et remise à zéro. Leurs résultats sont pédagogiques : ce ne sont pas des mesures réelles.

La progression reste dans le navigateur, sous la clé `svt-exploratrice-v1`. Une question réussie apporte **10 points une seule fois**, même si elle est répétée. Le bouton de réinitialisation demande confirmation. Si le stockage local est refusé ou indisponible, le carnet reste utilisable, mais la progression n’est conservée que pendant la session en cours. Aucune donnée personnelle n’est collectée ou transmise à un service tiers.

Les résultats exécutés et leurs limites sont consignés dans [le compte rendu de vérification](docs/verification.md).

## Modifier et ajouter un chapitre

```text
index.html               Point d’entrée et métadonnées
css/style.css            Mise en page, adaptation mobile et impression
js/content.js            Modules, leçons, glossaire et cartes
js/questions.js          Questions, indices et corrections
js/diagrams.js           Schémas SVG originaux et leurs légendes
js/widgets.js            Manipulations et simulations
js/app.js                Navigation et exercices
js/store.js              Sauvegarde locale et calcul des réussites
assets/                  Ressources locales
tests/                   Vérifications du contenu et du navigateur
docs/pedagogie.md        Sources, choix scientifiques et limites
scripts/serve.mjs        Serveur HTTP de développement
.github/workflows/pages.yml  Publication GitHub Pages
```

Pour enrichir le cours, ajouter les textes dans `content.js`, les questions dans `questions.js`, puis relier le nouveau module dans l’application. Conserver des identifiants de questions uniques et stables : ils servent à la sauvegarde des réussites et des erreurs. Chaque correction doit expliquer pourquoi la réponse est correcte ; chaque nouvelle notion doit être définie avant d’être utilisée.

Les liens internes utilisent des fragments (`#…`) et les ressources des chemins relatifs (`./js/…`, `./css/…`). Cela permet l’hébergement sous `/svt-exploratrice/` sans règle de réécriture ni erreur 404 au rechargement. Conserver ces chemins lors des modifications.

## Publier sur GitHub Pages

1. Envoyer les fichiers du projet sur la branche `main` du dépôt GitHub.
2. Dans **Settings → Pages → Build and deployment → Source**, sélectionner **GitHub Actions**.
3. Le workflow **Déployer sur GitHub Pages** se lance lors d’un envoi sur `main` ou depuis **Actions → Run workflow**.
4. Vérifier que les étapes de préparation et de déploiement réussissent. Le déploiement fournit alors l’URL du site dans l’environnement `github-pages`.
5. Ouvrir cette URL, naviguer dans un module et recharger la page pour confirmer le fonctionnement public.

Le workflow ne publie que `index.html`, `css/`, `js/` et `assets/`. Il exclut le dépôt Git, les outils de test, les dépendances et la documentation interne. Ne pas ajouter les photographies brutes du cahier à ces dossiers publics.

La présence du workflow ne signifie pas que le site est déjà publié. La publication dépend de son envoi sur GitHub, de l’activation de Pages et de la réussite effective du déploiement.
