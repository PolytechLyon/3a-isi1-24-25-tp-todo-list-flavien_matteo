const bouton = document.getElementById('new-todo-item-add')
const input = document.getElementById('new-todo-item-title')
bouton.addEventListener("click", fct);
function fct(event){
    const element = document.createElement("li");
    const textnode = document.createTextNode(input)
    element.appendChild(textnode);
    document.getElementById("todo-list").appendChild(element);
}