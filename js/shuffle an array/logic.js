const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//this code will run good in short array but will work slowly in long array

cards.sort(() => Math.random() - 0.5);
console.log(cards);
