const { expect } = require('chai');
const Player = require('../src/player');
const MagicalArena = require('../src/magicalArena');

describe('MagicalArena', () => {
    it('should declare the correct winner', () => {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);
        const arena = new MagicalArena(playerA, playerB);

        // Mocking dice rolls to ensure consistent results
        playerA.rollDice = () => 6; // Always roll max
        playerB.rollDice = () => 1; // Always roll min

        arena.startBattle();

        expect(playerA.isAlive()).to.be.true;
        expect(playerB.isAlive()).to.be.false;
    });
});
