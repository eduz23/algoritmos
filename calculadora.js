const prompt = require("prompt-sync")()

function calcularoperacao(){
let num1 = prompt("Selecione o primeiro numero: ")
let num2 = prompt("Selecione o segundo numero: ")
let conta = prompt("Selecione a operação mátematica que deseja realizar: ")
switch (conta) {
    case "soma":
        let soma = Number(num1) + Number(num2)
        console.log("A soma foi ", soma)
        break;
    case "subtracao":
        let subtracao = (num1) - (num2)
        console.log("A subtração foi ", subtracao)
        break;
    case "multiplicacao":
        let multi = (num1) * (num2)
        console.log("A multiplicação foi ", multi)
        break;
    case "divisao":
        if (num2!=0){
        let div = (num1) / (num2)
        console.log("A divisão deu ", div)}
        else {console.log("Erro, o 0 é inválido")}
        break;
    default:
        console.log("ERRO! Operação matematica invalida, responda novamente")
        calcularoperacao()
        break;
    }
}   
calcularoperacao()
