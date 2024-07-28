class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
        this.random = Math.random;
    }

    rollDice() {
        return Math.floor(this.random() * 6) + 1;
    }

    attack(defender) {
        const attackRoll = this.rollDice();
        const defenseRoll = defender.rollDice();

        const attackDamage = this.attack * attackRoll;
        const defenseStrength = defender.strength * defenseRoll;
        const damage = Math.max(0, attackDamage - defenseStrength);

        defender.reduceHealth(damage);

        console.log(`${this.name} attacks ${defender.name}: Attack Roll=${attackRoll}, Attack Damage=${attackDamage}, Defense Roll=${defenseRoll}, Defense Strength=${defenseStrength}, Damage Dealt=${damage}, Defender Health=${defender.health}`);
    }

    reduceHealth(damage) {
        this.health -= damage;
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Player;
