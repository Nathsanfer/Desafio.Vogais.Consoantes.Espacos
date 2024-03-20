// Cógigo que contará a quantidade de consoantes, vogais e espaços que tem em uma detrminada frase ou palavra.

// Crio um array que vai conter somente as vogais 
let vogais = [
    "a", "e",
    "i", "o",
    "u"
];
// Crio um array que vai conter somente as consoantes 
let consoantes = [
    "b", "c", "d", "f", "g",
    "h", "j", "k", "l", "m",
    "n", "p", "q", "r", "s",
    "t", "v", "w", "x", "y",
    "z"
];
// Crio um array que vai conter somente espaços
let espaços = [" ", " "];
// Crio uma variável que vai conter a minha palavra ou texto
let texto = "Nathalia Santos Ferreira";
// Utilizo um método que deixará as letras da minha palavra/frase em minúsculo
// "toLocaleLowerCase" deixa as letras minúsculas 
texto = texto.toLocaleLowerCase();
// Crio um array que vai conter minha palavra/frase separada em letra por letra
// "Split" deixa a palavra/frase separada letra por letra
let arrayLetras = texto.split('');
// Crio um array que vai ser preenchido somente com vogais
let arrayVogais = [];
// Crio um array que vai ser preenchido somente com consoantes
let arrayConsoantes = [];
// Crio um array que vai ser preenchido somente com espaços 
let arrayEspaços = [];

// Realizo um looping com o for 
for (let i = 0; i < arrayLetras.length; i++) {
    // Compara o array de vogais com o array da palavra/frase
    if (vogais.includes(arrayLetras[i])) {
        arrayVogais.push(arrayLetras[i]);
        // Compara o array de consoantes com o array da palavra/frase
    } else if (consoantes.includes(arrayLetras[i])) {
        arrayConsoantes.push(arrayLetras[i]);
        // Compara o array de espaços com o array da palavra/frase
    } else {
        arrayEspaços.push(arrayLetras[i]);
    }
}

// Exibo o texto original
console.log("Texto original:", texto);

// Exibo a quantidade de espaços que tem 
console.log("Apresenta " + arrayEspaços.length + " espaços.");


console.log("Essas são as consoantes presentes:");
// Exibo o array de consoantes
// "toString" transforma os elementos do array em string
console.log(arrayConsoantes.toString());
// Exibo a quantidade de consoantes que tem 
console.log("Apresenta " + arrayConsoantes.length + " consoantes.");


console.log("Essas são as vogais presentes:");
// Exibo o array de vogais
// "toString" transforma os elementos do array em string
console.log(arrayVogais.toString());
// Exibo a quantidade de vogais que tem 
console.log("Apresenta " + arrayVogais.length + " vogais.");