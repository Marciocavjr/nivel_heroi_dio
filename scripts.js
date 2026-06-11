

const formulario = document.getElementById("formHeroi");

const nomeHeroi = document.getElementById("nomeHeroi");
const xpHeroi = document.getElementById("xpHeroi");

const cadastro = document.getElementById("cadastro");
const resultado = document.getElementById("resultado");

const mensagemHeroi = document.getElementById("mensagemHeroi");

const novoHeroi = document.getElementById("novoHeroi");



function calcularNivel(xp) {

    if (xp <= 1000) {
        return "Ferro";
    }

    else if (xp <= 2000) {
        return "Bronze";
    }

    else if (xp <= 5000) {
        return "Prata";
    }

    else if (xp <= 7000) {
        return "Ouro";
    }

    else if (xp <= 8000) {
        return "Platina";
    }

    else if (xp <= 9000) {
        return "Ascendente";
    }

    else if (xp <= 10000) {
        return "Imortal";
    }

    else {
        return "Radiante";
    }
}



formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = nomeHeroi.value.trim();
    const xp = Number(xpHeroi.value);


    if (nome === "") {

        alert("Digite o nome do herói!");

        return;
    }

    if (isNaN(xp)) {

        alert("Digite um XP válido!");

        return;
    }

    if (xp < 0) {

        alert("O XP não pode ser negativo!");

        return;
    }


    const nivel = calcularNivel(xp);


    mensagemHeroi.textContent =
        `O Herói ${nome} está no nível ${nivel}`;


    cadastro.style.display = "none";
    resultado.style.display = "block";

});



novoHeroi.addEventListener("click", function() {


    nomeHeroi.value = "";
    xpHeroi.value = "";


    mensagemHeroi.textContent = "";

    resultado.style.display = "none";
    cadastro.style.display = "block";

});