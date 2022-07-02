const button = document.querySelector(".button");
const result = document.querySelector(".result");



function primo() {
    result.textContent = '';
    for(i=0; i<=1000; i++){
        if (i % 2 == 0 || i % 3 == 0 || i % 4 == 0 || i % 5 == 0 ) {
            if (i === 2 || i === 3 || i === 5) {
                let conteudo = document.createTextNode(` ${i} `);
                result.appendChild(conteudo);
                }else
                continue
        }else{
            let conteudo = document.createTextNode(` ${i} `);
            result.appendChild(conteudo);
        }
    }
}
button.addEventListener("click", primo);