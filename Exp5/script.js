const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task Function
function addTask() {

    let taskText = taskInput.value.trim();

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create List Item
    let li = document.createElement("li");
    li.innerText = taskText;

    // Mark Complete
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

// Button Click Event
addBtn.addEventListener("click", addTask);

// Enter Key Event
taskInput.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        addTask();
    }
});
