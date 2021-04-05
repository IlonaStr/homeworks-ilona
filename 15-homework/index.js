//Task 1
function* createIdGenerator() {
  let i = 1;
  while (true) yield i++;
}

const idGenerator = createIdGenerator();
console.log("value: ", idGenerator.next().value);
console.log("value: ", idGenerator.next().value);
console.log("value: ", idGenerator.next().value);
console.log("value: ", idGenerator.next().value);

//Task 2

function* newFontGenerator(value) {
    let currentValue = 14;
  while (currentValue) {
    if (value === "up") {
      yield currentValue = currentValue + 2;
    } else if (value === "down") {
      yield currentValue = currentValue - 2;
    } else yield currentValue;
  }
}

const fontGeneratorUp = newFontGenerator("up");
const fontGeneratorDown = newFontGenerator("down");
const fontGenerator = newFontGenerator(14);
console.log("font up:", fontGeneratorUp.next("up").value);
console.log("font up:", fontGeneratorUp.next("up").value);
console.log("font up:", fontGeneratorUp.next("up").value);
console.log("current font:", fontGenerator.next().value);
console.log("font down", fontGeneratorDown.next("down").value);
console.log("font down", fontGeneratorDown.next("down").value);
console.log("font down", fontGeneratorDown.next("down").value);
console.log("current font:", fontGenerator.next().value);
