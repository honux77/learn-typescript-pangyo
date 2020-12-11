# Learn TS Day 10

## enum

```
enum Menu {
  beefSoup,
  chikenSoup,
}

function eat(food: Menu): void {
  console.log(`${food} 를 먹습니다.`); //0를 먹습니다.
}

eat(Menu.beefSoup);

enum KoreanMenu {
  beefSoup = "설렁탕",
  chikenSoup = "삼계탕",
}

function eatKoreanFood(food: KoreanMenu): void {
  console.log(`${food} 를 먹습니다.`); //0를 먹습니다.
}

eatKoreanFood(KoreanMenu.beefSoup);
```
