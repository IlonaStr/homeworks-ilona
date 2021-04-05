async function getRandomChinese(length = 4) {
  let phrase = '';
  let i = 0;
  while (i < length) {
    await new Promise((resolve) => {
      let date = Date.now();
      phrase += String.fromCharCode(date.toString()).slice(-5);
      i++;
      setTimeout(() => {
        resolve(phrase);
      }, 50);
    });
  }
  console.log(phrase);
}
getRandomChinese();
