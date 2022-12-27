function insert(num){
    var numero = document.getElementById('number').innerText;
    document.getElementById('number').innerText = numero + num;
}

function apagar() {
    document.getElementById('number').innerText = ""
}
function apagarUm() {
    var resultado = document.getElementById('number').innerText;
    document.getElementById('number').innerText = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    var number = document.getElementById('number').innerText;
    if (number) {
       document.getElementById('number').innerText = eval(number)
   }
   

}
function apagaAcende() {
    if (document.getElementById('input').checked) {
        document.body.style.background = "#353634";
    }
    else {
        document.body.style.background = "#059F9D";    
    }
    
}