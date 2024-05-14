
const numbers = [1, 1, 2, 3, 5];
const array = numbers.map(number => number + 5);
console.log(array);



const word = ["planes", "trains", "automobiles"];
const array2 = word.map(word => word.slice(0, -1));
console.log(array2);



const words = ["planes", "trains", "automobiles"];
const a= words.map(word => word.charAt(0));
console.log(a);



const travel = ["planes", "trains", "automobiles"];
const capital = travel.map(cut=> cut.charAt(0).toUpperCase() + cut.slice(1).toLowerCase());
console.log(capital);



const pets = ["goldfish", "dog", "turtle", "tiger"]
const animal = pets.filter(pet => pet.length <= 5);
console.log(animal);



const petarray = ["goldfish", "dog", "turtle", "tiger"] 
const filter = petarray.filter(pet => pet.charAt(0).toLowerCase() === 't');
console.log(filter);



const number = [1, 1, 2, 3, 5,7,10];
const num= number.filter(greater => greater > 4);
console.log(num);




const value = [1,3,4,5,7,10];
const even=value.filter(evennum =>evennum%2==0)
console.log(even)