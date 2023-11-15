let opElement = document.querySelector('.op');
let par = document.createElement("ol");
document.querySelector(".material-symbols-outlined").addEventListener('click', add);
document.querySelector("input").addEventListener('keydown', go);
arr = [];

function add() {
    let task = document.querySelector("input").value;
    let ele = document.createElement("li");
    let com = document.createElement("input");
    com.setAttribute("type", 'checkbox');
    com.setAttribute("class", 'box');
    com.setAttribute("title", 'Mark as Done');
    ele.innerHTML = task;
    arr.push(task);
    opElement.appendChild(par);
    par.appendChild(ele);
    ele.appendChild(com);
    document.querySelector("input").value = " ";

    com.addEventListener('change', function () {
        if (com.checked) {
            ele.style.textDecoration = "line-through";
            ele.style.color = "rgb(85, 84, 84)";
            ele.style.fontStyle = "italic";

        }
        else {
            ele.style.textDecoration = "none";
            ele.style.color = "black";
            ele.style.fontStyle = "normal";
        }
    });
}

function go(e) {
    if (e.key === "Enter") {
        add();
    }
}

