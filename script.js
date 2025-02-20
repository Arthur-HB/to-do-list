const input = document.querySelector("#novotext");
const button = document.querySelector("form button");
const teste =  document.querySelector("h2");
const ul = document.querySelector("ul");
button.onclick = ev => {
    ev.preventDefault();
    if(input.value){
        const span = document.createElement("span");
        span.innerHTML = input.value;
        span.setAttribute("class", "tarefa")

        const libutton = document.createElement("button");
        libutton.innerHTML = `Concluida`;
        libutton.setAttribute("class", "libutton")

        const deletar = document.createElement("button");
        deletar.innerHTML = `Deletar`
        deletar.setAttribute("class", "deletar")

        const liitem = document.createElement("li");
        liitem.appendChild(span)
        liitem.appendChild(libutton)
        liitem.appendChild(deletar)

        libutton.onclick = () =>{
            // ul.removeChild(liitem)
            liitem.setAttribute('style', "text-decoration: line-through red;")
        }

        deletar.onclick = () =>{
            ul.removeChild(liitem)
        }

        ul.appendChild(liitem );
        input.value = "";
    }
}

