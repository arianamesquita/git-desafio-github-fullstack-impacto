// tipos primitivos

// boolean 
var vOuF = false;
console.log(vOuF);

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'ariana';
console.log(typeof(nome));

// function
var funcao = function(){}
console.log(typeof(funcao));

//como declarar
var variavel = 'ariana';
variavel='martine';
console.log(variavel);

let variavel2 = 'janine';
variavel2 = 'mesquita';
console.log(variavel2);

const constante = 'ariana';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuicao = 'ariana'

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

// comparação idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adição
var adicao = 1 + 1;
console.log(adicao);

// subtração
var subtração = 3 - 2;
console.log(subtração);

// multiplicação
var multiplicação = 2 * 2;
console.log(multiplicação);

// divisão real
var divisãoReal = 4 / 2;
console.log(divisãoReal);

// divisão inteira
var divisãoInteira = 5 % 2;
console.log(divisãoInteira);

// potenciação
var potenciação = 5 ** 2;
console.log(potenciação);

// maior que >
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que <
var menorQue = 2 < 1;
console.log(menorQue);

// maior igual que >=
var maiorIgualQue = 5 >= 5;
console.log(maiorIgualQue);

// menor igual que <=
var menorIgualQue = 3 <= 2;
console.log(menorIgualQue);

// && "e"
var e = true && false;
console.log(e);

// || "ou"
var ou = true || false;
console.log(ou);

// ! "não"
var nao = ! true;
console.log(nao);