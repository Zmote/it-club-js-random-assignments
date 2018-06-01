function randomizeCharacters(input) {
let randomizedInput = "";
for(let i = 0; i < input.length; i++){
    randomizedInput += input[Math.floor(Math.random()*input.length)];
}
return randomizedInput;
}

console.log(randomizeCharacters("Max Muster"));
console.log(randomizeCharacters("Max Muster"));
console.log(randomizeCharacters("Max Muster"));
console.log(randomizeCharacters("Max Muster"));