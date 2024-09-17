const prompt = require("prompt-sync")()
const palavra = prompt("digite uma palavra");
const replace = palavra.replaceAll("a" , "?")
console.log(replace)