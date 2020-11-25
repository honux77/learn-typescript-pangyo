var Monster = (function () {
    function Monster(name, hp, power) {
        this.name = name;
        this.hp = hp;
        this.power;
    }
    return Monster;
})();
var monsters = new Array();
monsters.push(new Monster('Pang', 100, 5));
monsters.push(new Monster('Yul', 150, 4));
console.dir(monsters);
