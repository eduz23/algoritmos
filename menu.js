const prompt = require("prompt-sync")()
console.log("Bem-vindo ao restaurante")
console.log("Nosso menu:")
console.log("1- Marmita pequena - R$ 18,00")
console.log("2- Marmita méida - R$ 23,00")
console.log("3- Marmita grande - R$ 28,00")
console.log("4- Refrigerante 1L - R$ 8,00")
console.log("5- Sobremesa - R$ 3,00")
const item = parseInt(prompt("Selecione o que você deseja do menu de 1 a 5: "))
switch(item){
    case 1:
        console.log("Seu pedido foi uma marmita pequena no preço de R$18,00")
        break;
        case 2:
            console.log("Seu pedido foi uma marmita média no preço de R$23,00")
            break;
            case 3:
                console.log("Seu pedido foi uma marmita grande no preço de R$28,00")
                break;
                case 4:
                    console.log("Seu pedido foi um refrigerante 1L no preço de R$8,00")
                    break;
                    case 5:
                        console.log("Seu pedido foi uma sobremesa no preço de R$3,00")
                        break;
                        default:
                            console.log("Você não selecionou nenhum item")
}