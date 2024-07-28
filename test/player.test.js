const { expect } = require('chai');
const Player = require('../src/player');

describe('Player', () => {
    it('should create a player with correct attributes', () => {
        const player = new Player('Player A', 50, 5, 10);
        expect(player.health).to.equal(50);
        expect(player.strength).to.equal(5);
        expect(player.attack).to.equal(10);
    });

    it('should roll dice between 1 and 6', () => {
        const player = new Player('Player A', 50, 5, 10);
        const roll = player.rollDice();
        expect(roll).to.be.within(1, 6);
    });

    it('should reduce health correctly', () => {
        const player = new Player('Player A', 50, 5, 10);
        player.reduceHealth(20);
        expect(player.health).to.equal(30);
    });

    it('should correctly determine if a player is alive', () => {
        const player = new Player('Player A', 50, 5, 10);
        expect(player.isAlive()).to.be.true;
        player.reduceHealth(50);
        expect(player.isAlive()).to.be.false;
    });
});
