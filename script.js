const inputbox = document.getElementById("input-box");
const TaskList = document.getElementById("tasklist");

function addtask(){
    if(inputbox.value === ''){
        alert("Enter your task first !");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputbox.value;
        TaskList.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7"; // code for cross icon
li.appendChild(span);

    }
    inputbox.value = "";
    savedata();
}

TaskList.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", TaskList.innerHTML);
}

function showdata(){
    TaskList.innerHTML = localStorage.getItem("data");
}
showdata();