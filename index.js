function pesquisar(){
    const pesquisa = document.getElementById("inputPesquisa");
    const termo = pesquisa.value.trim().toLowerCase();
    
    let encontrado = false;

    polos.forEach(polo =>{
        if(polo.nome.toLowerCase() === termo){
            encontrado = true;
            console.log("Existe")
        }
    });

    if(!encontrado){
        console.log("Nao existe");
    }
}