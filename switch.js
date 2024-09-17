const prompt = require("prompt-sync")()
const frutas = prompt("digite a fruta que voce deseja: ")
const expr = 'mamõezinhos';
switch (frutas) {
  case 'laranjinhas':
    console.log('laranjinhas são 1.29 R$ a unidade.');
    break;
  case 'mangazinhas':
  case 'mamaozinhos':
    console.log('Mangazinhas e mamõezinhos são 2.79 R$ a unidade.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Desculpas, nó não temos mais ${expr}.`);
    case 'berga':
    console.log('Bergamotas são 2 R$ a unidade')
}