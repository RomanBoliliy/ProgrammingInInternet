document.addEventListener("DOMContentLoaded", function() {
    // Встановлення з'єднання з базою даних IndexedDB
    var db;
    var request = window.indexedDB.open("TaskDB", 1);

    request.onerror = function(event) {
        console.log("Error opening database");
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        displayTasks();
    };

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        var objectStore = db.createObjectStore("tasks", { keyPath: "id", autoIncrement:true });
        objectStore.createIndex("taskName", "taskName", { unique: false });
    };

    // Функція для додавання завдання
    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var task = taskInput.value.trim();
        if (task !== "") {
            var transaction = db.transaction(["tasks"], "readwrite");
            var objectStore = transaction.objectStore("tasks");
            var newTask = {
                taskName: task
            };
            var request = objectStore.add(newTask);
            request.onsuccess = function() {
                displayTasks();
                taskInput.value = "";
            };
        }
    }

    // Функція для видалення завдання
    function deleteTask(id) {
        var transaction = db.transaction(["tasks"], "readwrite");
        var objectStore = transaction.objectStore("tasks");
        var request = objectStore.delete(id);
        request.onsuccess = function() {
            displayTasks();
        };
    }

    // Функція для видалення всіх завдань
    function clearAll() {
        var transaction = db.transaction(["tasks"], "readwrite");
        var objectStore = transaction.objectStore("tasks");
        var request = objectStore.clear();
        request.onsuccess = function() {
            displayTasks();
        };
    }

    // Функція для відображення всіх завдань
    function displayTasks() {
        var transaction = db.transaction(["tasks"], "readonly");
        var objectStore = transaction.objectStore("tasks");
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                var li = document.createElement("li");
                li.textContent = cursor.value.taskName;
                var deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.onclick = function() {
                    deleteTask(cursor.value.id);
                };
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
                cursor.continue();
            }
        };
    }

    // Додавання обробників подій для кнопок
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    document.getElementById("clearAllBtn").addEventListener("click", clearAll);
});