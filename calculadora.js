const prompt = require("prompt-sync")()
const num1 = prompt("Selecione o primeiro numero: ")
const num2 = prompt("Selecione o segundo numero: ")
const conta = prompt("Selecione a operação mátematica que deseja realizar: ")
switch (conta) {
    case "soma":
        const soma = Number(num1) + Number(num2)
        console.log("A soma foi ", soma)
        break;
    case "subtracao":
        const subtracao = (num1) - (num2)
        console.log("A subtração foi ", subtracao)
        break;
    case "multiplicacao":
        const multi = (num1) * (num2)
        console.log("A multiplicação foi ", multi)
        break;
    case "divisao":
        if (num2!=0){
        const div = (num1) / (num2)
        console.log("A divisão deu ", div)}
        else {console.log("Erro, o 0 é inválido")}
        break;
    default:
        console.log("ERRO! Operação matematica invalida")
}