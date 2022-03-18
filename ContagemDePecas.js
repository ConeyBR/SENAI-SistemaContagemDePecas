// Sistema de contagem de peças

var Pecas = ["Amortecedor", "Motor" , "Filtro de Ar"];
let Peso = 100;

if (Peso <100){
    console.log("A peça deve pesar 100g no mínimo");
}
else {
    console.log("A peça tem o peso adequado");
}

if (Pecas.length <10){
    console.log("Ainda tem espaço");
}
else{
    console.log("Não há mais espaço");
}

let NomePeca = "Disco de Freio";
if (NomePeca.length > 3){
    console.log("Nome da peça está adequado");
}
else if (NomePeca ==0){
    console.log("Nome não pode ser vazio");
}
else {
    console.log("Nome da peça deve conter no mínimo 3 caracteres")
}