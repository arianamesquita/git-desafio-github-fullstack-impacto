/* // if
var jogador1 = 1;
var jogador2 = 0;
var placar;

if(jogador1 > 0){
    console.log('Jogador 1 marcou ponto!');
}

//else
var jogador3 = 1;
var jogador4 = 0;

if (jogador3 > 0){
    console.log('jogador 3 marcou ponto');
} else{
    console.log('ninguém marcou ponto');
}

// elseif
var jogador5 = 0;
var jogador6 = 0;

if (jogador5 > 0){
    console.log('jogador 5 marcou ponto');
} else if (jogador6 > 0){
    console.log('jogador 6 marcou ponto');
} else {
    console.log('ninguém marcou ponto');
}

// ninho de if
var jogador7 = 0;
if (jogador7 != -1){
    if(jogador7 > 0) {
        console.log('jogador7 marcou ponto');
    } else {
        console.log('ninguém marcou ponto');
    }
} else {
    console.log('jogador inválido')
}

// if ternário
var jogador8 = -1;
var jogador9 = 0;

jogador8 != -1 && jogador9 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');
if (jogador8 > 0){
    console.log('jogador 8 marcou ponto!');
} else if (jogador9 > 0) {
    console.log('Jogador 9 marcou ponto!')
} else {
    console.log('ninguém marcou ponto');
}

// alterando placar
var jogador10 = 0;
var jogador11 = 0;
var placar;

if(jogador10 > 0 && jogador11 == 0) {
    console.log('Jogador 10 marcou ponto!');
    placar = jogador10 > jogador11;
}

else if (jogador11 > 0 && jogador10 == 0) {
    console.log('jogador 11 marcou ponto');
    placar = jogador11 > jogador10;
}

// switch case
switch (placar) {
    case placar = jogador10 > jogador11:
        console.log('jogador 10 ganhou!');
        break;
    case placar = jogador11 > jogador10:
        console.log('jogador 11 ganhou!');
        break;
    default:
        console.log('Ninguém ganhou!');
} */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

// for executa uma instrução até que ela seja falsa
/* for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
} */

// for/in executa repetição a partir de uma propriedade
// com array
/* for (let i in array) {
    console.log(i);
}

// com object
for (i in object) {
    console.log(i);
}
    */

// for of - executa repetição a partir de um valor
/* for (i of array) {
    console.log(i);
}

// com object
for (i of object.propriedade1) {
    console.log(i);
} */

// while
/* var a = 0;
while (a < 10){
    a++;
    console.log(a);
} */

// do while
var a = 0;
do {
    a++;
    console.log(a);
} while(a < 10);