class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power ,res){
        super(name, cost)
        this.power = power;
        this.res = res;
    }

    attack(target){
        if (target instanceof Unit){
            target.res -= this.power;
        } else{
            throw new Error("Target is not a Unit!");
        }
    }

    showStats(){
        console.log(`${this.name}: Res is ${this.res}, Power is ${this.power}`);
    }
}

class Effect extends Card{
    constructor(name, cost, text, magnitude, stat){
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }

    play( target ){
        if ( target instanceof Unit ){
            if (this.stat == 1){
                target.power += this.magnitude;
            } else{
                target.res += this.magnitude;
            }
        } else{
            throw new Error("Target must be a unit!");
        }
    }
}

let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

let hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", 
3, 2);
let unhandledPromiseAlgorithm = new Effect("Unhandled Promise Rejection",
1, "reduce target's resilience by 2", -2, 2);
let pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", 2,
1);

redBeltNinja.showStats();
blackBeltNinja.showStats();

hardAlgorithm.play(redBeltNinja);
unhandledPromiseAlgorithm.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);

redBeltNinja.showStats();
blackBeltNinja.showStats();
