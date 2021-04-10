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

class sensei extends ninja {
    constructor(name, health) {
        super(name, health)
        this.health = 200
        this.wisdom = 10
    }
    speakWisdom(wise) {
        const wisdom = super.drinkSake(wise)
    }
}

const mara = new sensei('Mara')

mara.speakWisdom(20)

mara.showStats()
