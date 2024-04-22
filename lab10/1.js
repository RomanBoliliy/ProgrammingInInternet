document.addEventListener("DOMContentLoaded", function() {
    // Функція для додавання завдання
    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var task = taskInput.value.trim();
        if (task !== "") {
            var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
            taskInput.value = "";
        }
    }

    // Функція для видалення завдання
    function deleteTask(index) {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    }

    // Функція для видалення всіх завдань
    function clearAll() {
        localStorage.removeItem("tasks");
        displayTasks();
    }

    // Функція для відображення всіх завдань
    function displayTasks() {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        tasks.forEach(function(task, index) {
            var li = document.createElement("li");
            li.textContent = task;
            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = function() {
                deleteTask(index);
            };
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    // Додавання обробників подій до кнопок
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    document.getElementById("clearAllBtn").addEventListener("click", clearAll);

    // Відображення завдань при завантаженні сторінки
    displayTasks();
});