function todo() {
    const div = document.createElement('div');
    
    /*
    untuk mendapatkan 
    value input dari id input-value
    */
    const value = document.querySelector("#input-value").value;
    if (value === ""){
        value = " - ";
    }

    // @localstorage
    window.localStorage['todo'] = value; // add value to localstorage key = todo

    div.className = 'list';
    
    div.innerHTML = `
        <input class="todo-item-checkbox" type="radio" onclick="remove(this)">
        <span>${value}</span>
    `;
    document.getElementById('todo').appendChild(div);
    document.getElementById("todo").innerHTML = values

}

function remove(input) {
    input.parentNode.remove();
}
