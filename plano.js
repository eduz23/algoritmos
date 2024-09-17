const prompt = require("prompt-sync")()
console.log("Bem-vindo ao site filmes.com")
console.log("Selecione um dos nossos planos de streaming")
console.log("1- Plano Básico: Acesso a filmes em 480p, 1 tela R$27.90 .")
console.log("2- Plano Premium: Acesso a filmes em 1080p, 4 telas R$44,90 .")
console.log("3- Plano Familiar: Acesso a filmes em 4K, até 6 telas simultâneas R$54,90 .")
const streaming = parseInt(prompt("Selecione o plano que deseja: "))
switch (streaming) {
    case 1:
    console.log("Seu plano escolhido foi o Básico no valor de 27,90")
    break;
        case 2:
        console.log("Seu plano escolhido foi o Premium no valor de 44,90")
        break;
            case 3:
            console.log("Seu plano escolhido foi o Familia no valor de 54,90")
            break;
}