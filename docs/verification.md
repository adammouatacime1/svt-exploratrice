# Vérifications de livraison

Vérification effectuée le 7 novembre 2026 dans l’environnement cloud, avec Node.js 24 et Chromium système.

## Résultats exécutés

| Vérification | Résultat |
| --- | --- |
| `npm ci --ignore-scripts --no-audit --no-fund` | Installation reproductible depuis le fichier verrouillé, réussie |
| `npm test` | 6 tests de structure du contenu réussis |
| `npm run test:e2e` | 25 tests navigateur réussis : 15 fonctionnels et 10 d’accessibilité |
| Les 38 questions, leurs associations et leurs corrections | Toutes parcourues et vérifiées dans le navigateur |
| Bilan final | 10 questions couvrant les cinq modules, parcours complet vérifié |
| Reprise et points | Réussites sauvegardées, points non cumulés en répétant une question, reprise à la question suivante après rechargement |
| Révision et réinitialisation | Indice, seconde tentative, liste des erreurs, suppression après réussite et confirmation avant remise à zéro vérifiés |
| Stockage indisponible | Un contexte qui refuse l’accès à `localStorage` reste fonctionnel |
| Simulations | Lecture, pause, reprise, curseurs et remise à zéro ; les quatre expériences de respiration et leurs unités ; réduction des animations vérifiées |
| Microscope | Trois grossissements, deux échantillons et légendes par sélection puis destination vérifiés |
| Clavier et toucher | Navigation des schémas, lien d’évitement et commandes tactiles Chromium vérifiés |
| Écrans étroits | Aucun débordement horizontal à 360, 390 et 768 px sur les vues testées |
| Accessibilité automatisée | Aucune violation axe WCAG A/AA sur les dix vues testées, dont deux mobiles ; ne constitue pas une certification exhaustive |
| Ressources et navigation | Aucun asset manquant ni erreur JavaScript pendant le parcours des routes ; rechargement sous `/svt-exploratrice/` vérifié |
| Impression | Fiche du module C exportée en PDF ; essentiel visible et commandes masquées |
| Contrôle visuel | Accueil bureau/mobile, cellules et neuf variantes de schémas inspectés |

Il n’y a pas de compilation : les fichiers HTML, CSS, SVG et JavaScript sont directement publiables. Le workflow copie seulement les ressources publiques dans l’artefact GitHub Pages.

## Limites et étapes extérieures

- Les 13 photos n’étaient pas accessibles : ordre, texte manuscrit et concordance exacte avec le cahier restent à vérifier. Le périmètre réalisé suit le programme explicite de la demande.
- Les tests tactiles utilisent Chromium. Safari sur un iPhone réel et les autres navigateurs n’ont pas été exécutés dans cet environnement.
- Les états initiaux des vues d’accessibilité ont été analysés automatiquement ; les vérifications de clavier et les contrôles visuels complètent ces tests sans garantir chaque situation d’assistance technique.
- Aucun déploiement distant ni publication sur GitHub Pages n’a été effectué ou vérifié. Envoyer les fichiers sur `main`, choisir GitHub Actions dans les paramètres Pages, puis vérifier le déploiement et l’URL publique.

Les captures et le PDF d’exemple sont dans `artifacts/`, dossier local ignoré par Git et exclu de la publication.
