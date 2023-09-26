const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//prida ukol
function addTask() {
    if(inputBox.value === ''){
        alert("Musíš něco napsat!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
}

//odebere nebo zaskrtne ukol
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);