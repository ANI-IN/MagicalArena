const Player = require('./player');
const MagicalArena = require('./magicalArena');

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

const arena = new MagicalArena(playerA, playerB);
arena.startBattle();
