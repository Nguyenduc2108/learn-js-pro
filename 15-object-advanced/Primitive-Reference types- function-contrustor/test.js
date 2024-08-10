function Character(name, hp, atk, defense, speed, counterRate) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.speed = speed;
    this.counterRate = counterRate;
    this.attack = (target) => {
        const damage = Math.max(this.atk - target.defense, 0); // => fix bug bên dưới
        target.hp -= damage; // ở đây gây ra bug nếu defense của target lớn hơn atk của this => đòn tấn công sẽ  gây sát thương âm và cộng máu cho target
        target.hp = Math.max(target.hp, 0);
        console.log(
            `${this.name} attacked ${target.name} with ${damage} damage, ${target.name} has remaining ${target.hp} hp `
        );

        if (target.isAlive() && Math.random() < target.counterRate) {
            const counterDamage = Math.max(target.atk - this.defense, 0);
            this.hp -= counterDamage;
            this.hp = Math.max(this.hp, 0);
            console.log(
                `${target.name} counter attacked ${this.name} with ${counterDamage} damage, ${this.name} has remaining ${this.hp} hp `
            );
        }
    };
    this.isAlive = () => this.hp > 0;
}

const tom = new Character("Tom", 1000, 100, 5, 5, 0.1);
const jerry = new Character("Jerry", 500, 20, 20, 20, 0.8);

console.log(tom);
console.log(jerry);

const battleRound = function (a, b) {
    a.attack(b);
    if (b.isAlive() && a.isAlive()) b.attack(a);
};

const battle = (attacker, defender) => {
    let round = 1;
    while (attacker.isAlive() && defender.isAlive()) {
        console.log(`Round ${round}`);
        if (attacker.speed > defender.speed) {
            battleRound(attacker, defender);
        } else if (defender.speed > attacker.speed) {
            battleRound(defender, attacker);
        } else {
            // speed bằng nhau thì random ai đánh trước
            if (Math.random() > 0.5) {
                battleRound(attacker, defender);
            } else {
                battleRound(defender, attacker);
            }
        }
        round++;
    }
    if (attacker.isAlive()) {
        console.log(`${attacker.name} win`);
    } else {
        console.log(`${defender.name} win`);
    }
};

battle(tom, jerry);
