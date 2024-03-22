let resultado = document.getElementById('resultado');


function asignar(valor){
    resultado.value += valor;
}


function calcular(){
    resultado.value = eval(resultado.value);
}


function limpiar(){
    resultado.value = "";
}

function borrar(){
    resultado.value = resultado.value.slice(0, -1);
}

function raiz(){
    resultado.value = Math.sqrt(resultado.value);
}

function porcentaje(){
    resultado.value = resultado.value / 100;
}

function cuadrado(){
    resultado.value = resultado.value * resultado.value;
}

function cos(){
    resultado.value = Math.cos(resultado.value);
}



