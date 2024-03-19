// Conta vogais
let vogais = [
    "a", "e", "i", 
    "o", "u"
]

let consoantes = [
    "b", "c", "d", "f", "g",
    "h", "j", "k", "l", "m", 
    "n", "p", "q", "r", "s",
    "t", "v", "w", "y", "z"
]

let texto = "Nathalia "

texto = texto.toLocaleLowerCase();

let arrayLetras = texto.split('');

let arrayVogais = [];

let arrayConsoantes = [];

for(let i = 0; i < arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
        arrayVogais.push(arrayLetras[i]);
    } else if (consoantes.includes(arrayLetras[i])){
        arrayConsoantes.push(arrayLetras[i]);
    } else if ()
}

console.log(arrayConsoantes)
console.log("Texto original:", texto);
console.log("Vogais encontradas:", arrayVogais.toString());
console.log("Total de vogais:" + arrayVogais.length);

