const amigos = [];

function adicionarAmigo(){
    let entrada = document.getElementById('amigo');
    let novoAmigo = entrada.value.trim();

    if (novoAmigo === ''){
        alert('Por favor, insira um nome.');
        return;
    } 

    if (amigos.includes(novoAmigo)){
        entrada.value = '';
        alert('Nome já inserido!');
        return; 
    }

    amigos.push(novoAmigo);
    entrada.value = '';
    atualizarListaAmigos(amigos);
    return amigos;
}

function atualizarListaAmigos(amigos){
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigosElement.appendChild(li)
    }
}


