function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
console.log(section);

let resultados = "";

for (let dado of dados){
resultados += `
    <div class="item-resultado">
        <h2><a href=""></a> ${dado.jogo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a class="more-info" href="${dado.link}" target="_parent">More About ${dado.jogo}</a>
    </div>
`}

    section.innerHTML = resultados;
}



    