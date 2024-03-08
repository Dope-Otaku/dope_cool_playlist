const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//this code will run good in short array but will work slowly in long array

// cards.sort(() => Math.random() - 0.5);
// console.log(cards);

//Fisher-Yates Algorithm
//this is the most efficient way to shuffle an array

shuffle(cards);
console.log(cards);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}
