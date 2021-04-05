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


const fontGenerator = newFontGenerator(14);
console.log('font up:', fontGenerator.next("up").value);
console.log('font up:', fontGenerator.next("up").value);
console.log('font up:', fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log('font down', fontGenerator.next("down").value);
console.log('font down', fontGenerator.next("down").value);
console.log('font down', fontGenerator.next("down").value);
console.log(fontGenerator.next().value);