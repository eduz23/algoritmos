const prompt = require("prompt-sync")()
const parimpar = prompt("escolha par ou ímpar: ")
const numero = prompt("escolha um número de 1 a 10: ")
const numeroaleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1
const soma = Number(numeroaleatorio) + Number(numero)
const par = (soma%2)
if((parimpar.toUpperCase()=="PAR" && par==0) || (parimpar.toUpperCase()=="IMPAR" && par!=0)) console.log("Voce ganhou! o numero escolhido do sistema foi " + numeroaleatorio + " o seu numero era " + numero)
else console.log("Voce perdeu! o numero escolhido do sistema foi " + numeroaleatorio + " o seu numero era " + numero)