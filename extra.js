const prompt = require("prompt-sync")()
const texto = prompt("Escreva um texto: ")
console.log("Selecione o que você deseja fazer com o texto")
console.log("Opção 1: Exibir o tamanho do texto")
console.log("Opção 2: Substituir um caractere")
const opcao = parseInt(prompt("Digite o que deseja fazer com o texto: "))
switch (opcao) {
    case 1:
        const leng = texto.length
        console.log("O seu texto possui " + leng + " caracteres.")
        break;
    case 2:
        const letra1 = prompt("Escolha a letra que quer substituir: ")
        const letra2 = prompt("Escolha a nova letra que deseja botar no texto: ")
        const replace = texto.replaceAll(letra1 , letra2)
        console.log(replace)
        break;
    default:
        console.log("Opção inválida")
}