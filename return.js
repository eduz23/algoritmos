const prompt = require("prompt-sync")();
const cargo = prompt("digite seu cargo ")
if (cargo!="adm")
{
    console.log("invalido")
    return
}
else console.log("valido")