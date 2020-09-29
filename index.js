import Game from './src/game.js';
import View from './src/view.js';
import Controller from './src/controller.js';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 480, 640, 20, 10);
const controller = new Controller(game, view);

// Adding object "game" to global object window for getting access to game object. Because constants don't fall into global namespace.
window.game = game;
window.view = view;
window.controller = controller;
