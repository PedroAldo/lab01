const value1 = document.querySelector(".value1");
const button = document.querySelector(".button");
const result = document.querySelector(".result");

function calculaFat () {
    let value = parseInt(value1.value);
    var total = value;
    for(i=1; i < value; i++){
        total *= i;
    }
    let conteudo = document.createTextNode(`O fatorial de ${value} é ${total}`);
    result.textContent = '';
    result.appendChild(conteudo);
}
button.addEventListener('click', calculaFat);