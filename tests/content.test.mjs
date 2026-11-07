import test from 'node:test';
import assert from 'node:assert/strict';
import { modules, glossary, flashcards } from '../js/content.js';
import { questions, finalQuestionIds } from '../js/questions.js';
import { partInfo, natureSVG, cellSVG, berleseSVG, respiratorySVG, exchangeSVG } from '../js/diagrams.js';

const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const expectedModules = ['a', 'b', 'c', 'd', 'e'];

test('les cinq modules possèdent une progression pédagogique complète', () => {
  assert.deepEqual(modules.map(module => module.id), expectedModules);
  for (const module of modules) {
    for (const key of ['title', 'subtitle', 'question', 'intro']) {
      assert.ok(nonempty(module[key]), `${module.id} : ${key} manque`);
    }
    assert.ok(module.lessons.length > 0, `${module.id} : aucune notion`);
    assert.ok(module.essentials.length > 0 && module.essentials.every(nonempty), `${module.id} : fiche vide`);
    for (const lesson of module.lessons) {
      for (const key of ['title', 'question', 'observe', 'interpret', 'conclude']) {
        assert.ok(nonempty(lesson[key]), `${module.id}/${lesson.title} : ${key} manque`);
      }
      const exercise = questions.find(question => question.id === lesson.exerciseId);
      assert.ok(exercise, `${module.id}/${lesson.title} : exercice associé introuvable`);
      assert.equal(exercise.module, module.id, `${module.id}/${lesson.title} : exercice d’un autre module`);
      assert.ok(lesson.terms.length > 0, `${module.id}/${lesson.title} : vocabulaire absent`);
      for (const term of lesson.terms) {
        assert.ok(nonempty(term.word) && nonempty(term.definition), 'Terme sans définition');
      }
    }
  }
});

test('la banque contient au moins 25 questions, tous les types et chaque module', () => {
  assert.ok(questions.length >= 25);
  assert.equal(new Set(questions.map(question => question.id)).size, questions.length, 'Identifiants dupliqués');
  assert.deepEqual([...new Set(questions.map(question => question.type))].sort(), ['label', 'match', 'mcq', 'predict', 'sort']);
  for (const id of expectedModules) {
    assert.ok(questions.filter(question => question.module === id).length >= 5, `${id} : moins de cinq questions`);
  }
  for (const question of questions) {
    assert.ok(expectedModules.includes(question.module), `${question.id} : module inconnu`);
    for (const key of ['id', 'prompt', 'hint', 'explanation']) {
      assert.ok(nonempty(question[key]), `${question.id} : ${key} manque`);
    }
    if (['sort', 'match', 'label'].includes(question.type)) {
      assert.ok(question.pairs.length > 1, `${question.id} : associations insuffisantes`);
      assert.ok(question.targets.length > 1 && question.targets.every(nonempty));
      assert.equal(new Set(question.targets).size, question.targets.length, `${question.id} : destinations dupliquées`);
      assert.equal(new Set(question.pairs.map(pair => pair.item)).size, question.pairs.length, `${question.id} : éléments dupliqués`);
      for (const pair of question.pairs) {
        assert.ok(nonempty(pair.item));
        assert.ok(question.targets.includes(pair.target), `${question.id} : destination introuvable`);
      }
    } else {
      assert.ok(question.options.length >= 3 && question.options.every(nonempty));
      assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.options.length, `${question.id} : réponse invalide`);
    }
  }
});

test('le bilan final référence des questions existantes et couvre les cinq modules', () => {
  assert.equal(new Set(finalQuestionIds).size, finalQuestionIds.length);
  const selected = finalQuestionIds.map(id => {
    const question = questions.find(question => question.id === id);
    assert.ok(question, `Question finale inconnue : ${id}`);
    return question;
  });
  assert.deepEqual([...new Set(selected.map(question => question.module))].sort(), expectedModules);
});

test('le glossaire rend accessibles tous les termes des leçons', () => {
  assert.ok(glossary.length > 0);
  assert.equal(new Set(glossary.map(term => term.word)).size, glossary.length);
  for (const term of glossary) assert.ok(nonempty(term.word) && nonempty(term.definition));
  for (const module of modules) {
    for (const term of module.lessons.flatMap(lesson => lesson.terms)) {
      assert.ok(glossary.some(entry => entry.word === term.word), `Terme absent du glossaire : ${term.word}`);
    }
  }
});

test('les cartes de mémorisation possèdent un recto et un verso', () => {
  assert.ok(flashcards.length >= 10);
  assert.equal(new Set(flashcards.map(card => card.front)).size, flashcards.length);
  for (const card of flashcards) assert.ok(nonempty(card.front) && nonempty(card.back));
});

test('chaque zone des schémas possède une explication et un accès clavier', () => {
  const diagrams = [natureSVG(), cellSVG('plant'), cellSVG('animal'), berleseSVG(0), berleseSVG(100), ...['human', 'grasshopper', 'plant', 'fish'].map(kind => respiratorySVG(kind)), exchangeSVG(0), exchangeSVG(100)];
  const renderedKeys = new Set();
  for (const markup of diagrams) {
    assert.match(markup, /^<svg\s/);
    assert.match(markup, /<title>[^<]+<\/title>/, 'Schéma sans titre accessible');
    const zones = [...markup.matchAll(/<g\b([^>]*)data-part="([^"]+)"([^>]*)>/g)];
    for (const [, before, key, after] of zones) {
      renderedKeys.add(key);
      assert.ok(partInfo[key], `Zone sans explication : ${key}`);
      assert.ok(nonempty(partInfo[key].name) && nonempty(partInfo[key].text));
      const attributes = before + after;
      assert.match(attributes, /tabindex="0"/, `Zone inaccessible au clavier : ${key}`);
      assert.match(attributes, /role="button"/, `Rôle manquant : ${key}`);
      assert.match(attributes, /aria-label="[^"]+"/, `Libellé manquant : ${key}`);
    }
    assert.ok(!markup.includes('NaN') && !markup.includes('undefined'), 'Valeur de dessin invalide');
  }
  for (const key of Object.keys(partInfo)) {
    assert.ok(renderedKeys.has(key), `Information sans zone dans les schémas : ${key}`);
  }
});
