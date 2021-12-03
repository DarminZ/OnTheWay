const users = Array(25)
  .fill(1)
  .map((_, i) => `user${i}`);
const gifts = Array(25)
  .fill(1)
  .map((_, i) => `gift${i}`);

const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));
const draw = (users = [], gifts = []) => {
  let len = users.length;
  let tmpArray = Array(len)
    .fill(1)
    .map((_, i) => i);
  let randomUserSort = Array(len)
    .fill(1)
    .map((_, i) => i)
    .sort((a, b) => Math.random() - Math.random());
  let randomGiftSort = Array(len)
    .fill(1)
    .map((_, i) => i)
    .sort((a, b) => Math.random() - Math.random());
  return randomUserSort.map((userIndex, i) => {
    let j = getRandom(len - i);
    while (tmpArray[j] === userIndex) {
      j = getRandom(len - i);
    }
    let toUser = tmpArray[j];
    tmpArray = [
      ...tmpArray.slice(0, j),
      ...tmpArray.slice(j + 1, tmpArray.length),
    ];
    return [users[userIndex], users[toUser], gifts[randomGiftSort[i]]];
  });
};

draw(users, gifts);
