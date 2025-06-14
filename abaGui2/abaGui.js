const inputNovoObjetivo = document.getElementById("novoObjetivo");
const botaoSalvarObjetivo = document.getElementById("salvarObjetivo");

const botaoComunidade1 = document.getElementById("comunidade1");
const botaoComunidade2 = document.getElementById("comunidade2");

botaoSalvarObjetivo.addEventListener('click', botaoSalvar);
botaoComunidade1.addEventListener('click', botaoComu1);
botaoComunidade2.addEventListener('click', botaoComu2);


function botaoComu1(){
    console.log("comunidade 1 selecionada!")
    botaoComunidade1.innerHTML = `<nav><a href="./paginas/comunidade1"></a></nav>`;
}
function botaoComu2(){
    console.log("comunidade 2 selecionada!")
    botaoComunidade2.innerHTML = `<nav><a href="./paginas/comunidade2"></a></nav>`;
}
function botaoSalvar(){
    console.log("objetivo salvo!")
}