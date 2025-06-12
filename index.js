let encontrado = false;

function pesquisar(){
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

function mostrarLista(achado){
    const tableHead = document.getElementById("tableHead")
    const display = document.getElementById("divDisplay");
    const tabela = document.getElementById("tabela");

    if(encontrado){
        display.style.display = 'inline';

        polos.forEach(function(item){
            const linha = `<td>Temos ${item.bikeQntd} biclicletas disponiveis!</td>
                <td>Temos ${item.patineteQntd} patinetes disponiveis!</td>`
            tabela.innerHTML += linha;
        })
    }
    else{
        tableHead.style.display = 'none';
        display.style.display = 'inline';
        tabela.innerHTML = (`<td>Infelizmente não temos nenhum item disponivel nessa região :(</td>`)
    }
}