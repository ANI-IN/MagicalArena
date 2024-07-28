const Player = require('./player');

class MagicalArena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    startBattle() {
        let attacker = this.playerA.health <= this.playerB.health ? this.playerA : this.playerB;
        let defender = attacker === this.playerA ? this.playerB : this.playerA;

        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            attacker.attack(defender);
            [attacker, defender] = [defender, attacker];
        }

        this.announceWinner();
    }

    announceWinner() {
        if (this.playerA.isAlive()) {
            console.log("Player A wins!");
        } else {
            console.log("Player B wins!");
        }
    }
}

module.exports = MagicalArena;
