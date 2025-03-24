const input = document.querySelector("#novotext");
const button = document.querySelector("form button");
const teste = document.querySelector("h2");
const ul = document.querySelector("ul");


function saveTasks() {
    const tasks = [];
    ul.querySelectorAll("li").forEach(li => {
        const task = {
            text: li.querySelector("span").innerHTML,
            completed: li.querySelector("span").classList.contains("strikethrough-active")
        };
        tasks.push(task);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(task => {
            const span = document.createElement("span");
            span.innerHTML = task.text;
            span.setAttribute("class", "tarefa");
            if (task.completed) {
                span.classList.add("strikethrough", "strikethrough-active");
            }

            const libutton = document.createElement("button");
            libutton.innerHTML = `Concluida`;
            libutton.setAttribute("class", "libutton");

            const deletar = document.createElement("button");
            deletar.innerHTML = `Deletar`;
            deletar.setAttribute("class", "deletar");

            const liitem = document.createElement("li");
            liitem.appendChild(span);
            liitem.appendChild(libutton);
            liitem.appendChild(deletar);

            libutton.onclick = () => {
                span.classList.add('strikethrough');
                setTimeout(() => {
                    span.classList.add('strikethrough-active');
                    saveTasks();
                }, 10);
            };

            deletar.onclick = () => {
                liitem.classList.add('fade-out');
                setTimeout(() => {
                    ul.removeChild(liitem);
                    saveTasks();
                }, 500);
            };

            ul.appendChild(liitem);
        });
    }
}

button.onclick = ev => {
    ev.preventDefault();
    if (input.value) {
        const span = document.createElement("span");
        span.innerHTML = input.value;
        span.setAttribute("class", "tarefa");

        const libutton = document.createElement("button");
        libutton.innerHTML = `Concluida`;
        libutton.setAttribute("class", "libutton");

        const deletar = document.createElement("button");
        deletar.innerHTML = `Deletar`;
        deletar.setAttribute("class", "deletar");

        const liitem = document.createElement("li");
        liitem.appendChild(span);
        liitem.appendChild(libutton);
        liitem.appendChild(deletar);

        libutton.onclick = () => {
            span.classList.add('strikethrough');
            setTimeout(() => {
                span.classList.add('strikethrough-active');
                saveTasks();
            }, 10);
        };

        deletar.onclick = () => {
            liitem.classList.add('fade-out');
            setTimeout(() => {
                ul.removeChild(liitem);
                saveTasks();
            }, 500);
        };

        ul.appendChild(liitem);
        input.value = "";
        saveTasks();
    }
};


window.onload = loadTasks;