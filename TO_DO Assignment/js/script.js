//ALL TASKS 
function allTasksDisplay() {
    document.getElementById("allTasks").style.display="block";
    document.getElementById("pendingTasks").style.display="none";
    document.getElementById("completedTask").style.display="none";
    var allTask = document.querySelectorAll('ul li');
    clearAllTask();
    for (let i = 0; i <= allTask.length - 1; i++) {
        var span = document.createElement("LI");
        var txt = document.createTextNode(allTask[i].innerText);
        span.appendChild(txt);   
        console.log(span);     
        var allTasks = document.getElementById("allTasks");
        allTasks.appendChild(span);
    }
    return 0;
}

function clearAllTask() {
    var allTask = document.getElementById("allTasks");
    allTask.innerHTML="";
}

//COMPLETED TASKS
function completeTasksDisplay() {
    document.getElementById("completedTask").style.display="block";
    document.getElementById("pendingTasks").style.display="none";
    document.getElementById("allTasks").style.display="none";
    var completeTask = document.querySelectorAll('ul .checked');
    clearCompleteTask();
    for (let i = 0; i <= completeTask.length - 1; i++) {
        var span = document.createElement("LI");
        var txt = document.createTextNode(completeTask[i].innerText);
        span.appendChild(txt);        
        var completeTasks = document.getElementById("completedTask");
        completeTasks.appendChild(span);
    }
    return 0;
}

function clearCompleteTask() {
    var completeTask = document.getElementById("completedTask");
    completeTask.innerHTML="";
}

//PENDING TASKS 
function pendingTasks() {
    document.getElementById("pendingTasks").style.display="block";
    document.getElementById("completedTask").style.display="none";
    document.getElementById("allTasks").style.display="none";
    var pendingTasks = document.querySelectorAll('ul li:not([class])');
    clearPendingTask();
    for (let i = 0; i <= pendingTasks.length - 1; i++) {
        var span = document.createElement("LI");
        var txt = document.createTextNode(pendingTasks[i].innerText);
        span.appendChild(txt);        
        var pendingTask = document.getElementById("pendingTasks");
        pendingTask.appendChild(span);
    }
    return 0;
}

function clearPendingTask() {
    var pendingTask = document.getElementById("pendingTasks");
    pendingTask.innerHTML="";
}


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var ele = this.parentElement;
        ele.remove();     
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } 
    else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}