let amigos = [];

function adicionarAmigo(){
    let entrada = document.getElementById('amigo');
    let novo_amigo = entrada.value.trim();

    if (novo_amigo === ''){
        alert('Por favor, insira um nome.');
    } else {
        if (amigos.indexOf(novo_amigo)!== -1 ){
            entrada.value = '';
            alert('Nome já inserido!');
        } else {
            amigos.push(novo_amigo);
            entrada.value = '';
            console.log(amigos);
            return amigos
        }
    }
}