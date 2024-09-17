const prompt = require("prompt-sync")()
console.log("Selecione o idioma que você deseja: ")
console.log("Português")
console.log("Ingles")
console.log("Epanhol")
console.log("França")
console.log("Japão")
const lingua = prompt("Selecione a lingua que você deseja: ")
switch (lingua){
    case "Portugues":
    console.log("Seu idioma selecionado foi português")
    break;
        case "Ingles":
        console.log("Seu idioma selecionado foi Inglês")
        break;
            case "Espanhol":
            console.log("Seu idioma selecionado foi Espanhol")
            break;
                case "Franca":
                console.log("Seu idioma selecionado foi francês")
                break;
                    case "Japao":
                    console.log("Seu idioma selecionado foi japonês")
                    break;
                        default:
                        console.log("voce nao selecionou nenhum idioma valido")
}