var Menu;
(function (Menu) {
    Menu[Menu["beefSoup"] = 0] = "beefSoup";
    Menu[Menu["chikenSoup"] = 1] = "chikenSoup";
})(Menu || (Menu = {}));
function eat(food) {
    console.log(food + " \uB97C \uBA39\uC2B5\uB2C8\uB2E4."); //0를 먹습니다.
}
eat(Menu.beefSoup);
