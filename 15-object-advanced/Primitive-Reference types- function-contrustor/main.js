// let person = { name: "John", age: 25 };
// let numbers = [1, 2, 3, 4, 5];
// function sum(a, b) {
//     return a + b;
// }

//=========================================================================================================
// Build simple game  logic (Tom and Jerry)

/**
 * Tom and Jerry
 * 1. Health / HP: Máu
 * 2. Attack power / ATK: Tấn công => attacked => hp còn lại = hp - atk - defense
 * 3. kiểm tra xem ai thắng cuộc => hp = 0
 * 4. check odd and even round để xem ai tấn công trước(odd: Tom, even: Jerry)
 * 5. agile: nhanh nhẹn => check agile để xem ai tấn công trước
 */

function Figure(name, hp, atk, agile, defense, counterRate) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.agile = agile;
    this.defense = defense;
    this.counterRate = counterRate;

    // tấn công
    (this.attack = (target) => {
        const damage = Math.max(this.atk - target.defense, 0);
        target.hp -= damage;
        target.hp = Math.max(target.hp, 0);
        console.log(
            `${this.name} attacked ${target.name} with ${damage} damage, ${target.name} has remaining ${target.hp} hp `
        );

        // counter attack
        if (target.isAlive() && Math.random() < target.counterRate) {
            const counterDamage = Math.max(target.atk - this.defense, 0);

            // trừ hp của người tấn công
            this.hp -= counterDamage;
            this.hp = Math.max(this.hp, 0);
            console.log(
                `${target.name} counter attacked ${this.name} with ${counterDamage} damage, ${this.name} has remaining ${this.hp} hp `
            );
        }
    }),
        // kiểm tra xem ai tấn công trước
        (this.isAgile = (target) => {
            this.agile > target.agile ? this.attack(target) : target.attack(this);
        }),
        // kiểm tra xem ai thắng cuộc
        (this.isAlive = () => {
            return this.hp > 0;
        });
}

const tom = new Figure("Tom", 1000, 100, 50, 5, 0.1);

const jerry = new Figure("Jerry", 500, 20, 100, 20, 0.8);

console.log(tom);
console.log(jerry);

// const tom = {
//     name: "Tom",
//     hp: 1000,
//     atk: 100,
//     agile: 50,
//     defense: 5,
//     attack(target) {
//         const damage = Math.max(this.atk - target.defense, 0);
//         target.hp -= damage;
//         target.hp = Math.max(target.hp, 0);
//         console.log(
//             `${this.name} attacked ${target.name} with ${damage} damage, ${target.name} has remaining ${target.hp} hp `
//         );
//     },
//     isAgile(target) {
//         this.agile > target.agile ? this.attack(target) : target.attack(this);
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// };

// const jerry = {
//     // attack(target) {
//     //     const damage = Math.max(this.atk - target.defense, 0);
//     //     target.hp -= damage;
//     //     console.log(
//     //         `${this.name} attacked ${target.name} with ${damage} damage, ${target.name} has remaining ${target.hp} hp `
//     //     );
//     // },
//     // isAgile(target) {
//     //     this.agile > target.agile ? this.attack(target) : target.attack(this);
//     // },
//     // isAlive() {
//     //     return this.hp > 0;
//     // },

//     ...tom,
//     name: "Jerry",
//     hp: 500,
//     atk: 20,
//     agile: 100,
//     defense: 20,
// };

let round = 1;

while (tom.isAlive() && jerry.isAlive()) {
    console.log(`Round: ${round}`);

    // method 1 / way 1
    round % 2 !== 0 ? jerry.attack(tom) : tom.attack(jerry);
    // if (round % 2 === 0) {
    //     tom.attack(jerry);
    // } else {
    //     jerry.attack(tom);
    // }

    // method 2 / way 2
    // check agile
    // tom.isAgile(jerry);

    round++;
}

tom.isAlive() ? console.log(`${tom.name} win!`) : console.log(`${jerry.name} win!`);

// 2. Function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person("John", 30);
console.log(person);

function carModel(brand, model) {
    // Sai: nên là CarModel
    this.brand = brand;
    this.model = model;
}
