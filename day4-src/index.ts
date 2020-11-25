class Monster {
    
    name:string
    hp:number
    power:number

    constructor(name:string, hp:number, power:number) {
        this.name = name;
        this.hp = hp;
        this.power 
    }
}

const monsters:Array<Monster> = new Array();
monsters.push(new Monster('Pang', 100, 5));
monsters.push(new Monster('Yul', 150, 4));
console.dir(monsters);