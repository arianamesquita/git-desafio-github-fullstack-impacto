// o que são vetores ou arrays

// como declarar um array
let array = ['string', 1, true];
console.log(array);

// pode guardar vários tipos de dados
let array2 = ['string', true, 1, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2[0]);

// forEach
array2.forEach(function(item, index){console.log(item, index)});

// push
array2.push('item2');
console.log(array2);

// pop
array2.pop();
console.log(array2);

// shift
array2.shift();
console.log(array2);

// unshift
array2.unshift(7);
console.log(array2);

// indexOf
console.log(array2.indexOf(true));

// splice()
array2.splice(0, 3);
console.log(array2);

// slice()
let novoArray = array2.slice(0, 3);
console.log(novoArray);

// Objetos
let object = { string:'string', Number: 1, Boolean: true, array:['array'], objectInterno:{objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);