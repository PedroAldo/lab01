const button = document.querySelector(".button");
const result = document.querySelector(".result");
const eq = document.querySelector(".eq");


function somaNumbers () {
    eq.textContent = '';
    let total = 0;
    for (i = 0; i <= 1000; i++) {
        if (i % 2 === 0){
            total += i;
            let conteudo =document.createTextNode(`${i} + `);
            eq.appendChild(conteudo);
        }else
            continue;
        }
        let conteudo =document.createTextNode(`A soma de todos os pares até 1000 é: ${total}`);
        result.textContent = '';
        result.appendChild(conteudo);
}
button.addEventListener('click', somaNumbers);