const value1 = document.querySelector(".value1");
const button = document.querySelector(".button");
const result = document.querySelector(".result");
function calculaFat () {
    result.textContent = '';
    let value = parseInt(value1.value);
    let total = value;
    for(i=0; i <= 30; i++){
        total = Math.pow(value, i);
        let conteudo = document.createTextNode(value + " elevado a " + i + " é: "+ total + " ----------------------------------------------------------------------------- ");
        result.appendChild(conteudo);
    }
    
}
button.addEventListener('click', calculaFat);