import Game from './src/game.js';

const game = new Game();

// Adding object "game" to global object window for getting access to game object. Because constants don't fall into global namespace.
window.game = game;

console.log(game);