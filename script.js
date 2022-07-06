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
    /*
    untuk menyimpan list todo ke localstorage
    */
    // const localStorage = () => {
    //     localStorage.setItem('name', value()); //errrrrrrr :)
    // }

    div.className = 'list';
    
    div.innerHTML = `
        <input class="todo-item-checkbox" type="radio" onclick="remove(this)">
        <span>${value}</span>
    `;
    document.getElementById('todo').appendChild(div);
}

function remove(input) {
    input.parentNode.remove();
}