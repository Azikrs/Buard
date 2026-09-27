const termos = document.getElementById("termos");
const continuarBotao = document.getElementById("continuarBotao");

termos.addEventListener ("change" , function() {
    if (termos.checked) {
        continuarBotao.disabled = false
    } else {
        continuarBotao.disabled = true
    }
});

function cadastro() {
    window.location.href = "cadastro.html";
}

function voltar() {
    window.location.href = "index.html"
}

function login() {
    window.location.href = "login.html"
}