const button = document.querySelector(".button");
const result = document.querySelector(".result");

function somaNumbers () {
    result.textContent = '';
    let aux1=1;
    let aux2 =2;
    let aux3= 3;
        for(i = 1; i<34; i++){
            let conteudo =document.createTextNode(` ${aux1} ${aux2} ${aux3}`);
            result.appendChild(conteudo);
            aux1 = aux3 + aux2;
            aux2 = aux1 + aux3;
            aux3 = aux2 + aux1;
            
        }
}

button.addEventListener('click', somaNumbers);

