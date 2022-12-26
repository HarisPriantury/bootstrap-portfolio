let a = [2, 4];
let b = [16, 32, 96];
function getTotalX(a, b) {
  maxA = Math.max(...a);
  minB = Math.min(...b);
  let arrayBetween = [];
  let count = 0;
  for (let i = maxA; i <= minB; i++) {
    if (a.every((bilangan) => i % bilangan === 0)) {
      if (b.every((bilanganB) => bilanganB % i === 0)) {
        arrayBetween.push(i);
      }
    }
  }
  console.log(arrayBetween);
}
getTotalX(a, b);
