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

function botaoSalvar() {
    const texto = inputNovoObjetivo.value.trim();
    if (texto === "") return;

    const lista = document.getElementById("listaObjetivos");

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        span.style.textDecoration = this.checked ? "line-through" : "none";
    });

    const span = document.createElement("span");
    span.textContent = " " + texto;

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botaoExcluir);

    lista.appendChild(li);
    inputNovoObjetivo.value = "";
}
