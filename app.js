let amigos = [];

function receberNomes() {
    let nome = document.querySelector("input").value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
    }
}

function adicionarAmigo() {
    receberNomes();
    document.getElementById("listaAmigos").innerHTML = amigos.map(nome => `<li>${nome}</li>`).join("");
    document.querySelector("input").value = "";
}

function gerarNomeAmigoSecreto(){
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoEscolhido = amigos[numeroSorteado];
    return amigoEscolhido;
}

function sortearAmigo() {
    if (amigos.length <= 1) {
        alert("Adicione pelo menos dois amigos.");
        return;
    }
    document.getElementById("listaAmigos").innerHTML = "";
    const amigo = gerarNomeAmigoSecreto();
    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: <strong>${amigo}</strong>`;

}
