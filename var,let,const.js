//var
//var altura = 1.5;
//var comprimento = 3.5;

//area = altura * comprimento;

//console.log(area)

//let forma = 'triangulo'
//let altura = 1.5;
//let comprimento = 3.5;
//let area;

//if (forma === 'triangulo') {
//area = altura*comprimento;
//}else {
  //  area = altura*comprimento /2
//}
//console.log(area)

const altura = 1.5;
const comprimento = 3.5;
const forma = 'triangulo';
let area;

if (forma === 'triangulo') {
    area = altura*comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
// Obs: Criei uma let area, pois não há um número fixo pré definido. Caso troque para const da erro, pois seria necessário atribuir um valor.