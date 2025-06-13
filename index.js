
let position;

function pesquisar(){
    let encontrado = false;
    const pesquisa = document.getElementById("inputPesquisa");
    const termo = pesquisa.value.trim().toLowerCase();

    polos.forEach(polo =>{
        if(polo.nome.toLowerCase() === termo){
            encontrado = true;
        }
    });

    if(!encontrado){
        console.log("Nao existe");
    }

    mostrarLista(encontrado);
}

function mostrarLista(polo){
    const display = document.getElementById("divDisplay");
    const tabela = document.getElementById("tabela");

        display.style.display = 'inline';

        tabela.innerHTML = '';

    const bike = polo.bikeQntd ?? 'N/A';
    const patinete = polo.patineteQntd ?? 'N/A';

    const linha = `
        <tr>
            <td>Temos ${bike} bicicletas disponíveis!</td>
            <td>Temos ${patinete} patinetes disponíveis!</td>
        </tr>
    `;

    tabela.innerHTML = linha;

}