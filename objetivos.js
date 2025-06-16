const inputNovoObjetivo = document.getElementById("novoObjetivo");
const botaoSalvarObjetivo = document.getElementById("salvarObjetivo");

botaoSalvarObjetivo.addEventListener('click', botaoSalvar);

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
    botaoExcluir.textContent = "";
    botaoExcluir.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botaoExcluir);

    lista.appendChild(li);
    inputNovoObjetivo.value = "";
}
