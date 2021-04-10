class ninja {
    constructor(name, health) {
        this.ninjaName = name;
        this.health = 100;
        this.speed = 3
        this.strength = 3
        
    }
    sayName() {
        console.log('I am ' + this.ninjaName)
    }
    showStats() {
        console.log(this.ninjaName + ' Health: ' + this.health + ' Speed: ' + this.speed + ' Strength: ' + ' ' + this.strength)
    }
    drinkSake(sake) {
        this.health += sake
    }
}

const ghostRunner = new ninja('GhostRunner', 100);

ghostRunner.drinkSake(50)

ghostRunner.showStats()

console.log(ghostRunner)
