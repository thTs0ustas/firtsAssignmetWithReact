export const randomId = () => {
  let hashId = [];
  let letter =
    "abcdefghijklmnABCDEFGHIJKLMNOPQRSTUVWXYZopqrstuvwxyz1234567890".split("");
  while (hashId.length <= 5) {
    hashId.push(letter[Math.floor(Math.random() * letter.length)]);
  }
  return hashId.join("");
};
