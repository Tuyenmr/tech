function randomText() {
  const text = "1234567890abcdef";
  let arr = [];
  for (let i = 0; i < 6; i++)
    arr.push(text[Math.floor(Math.random() * text.length)]);
  return "#".concat(arr.join(""));
}
console.log(randomText());
