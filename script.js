
        let inputs = document.getElementById("inp");
        let text = document.querySelector(".text");
        let tasks = [];

        // Load tasks from local storage when the page loads
        window.onload = function () {
        if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        renderTasks();
    }
    };

        function renderTasks() {
        text.innerHTML = '';
        tasks.forEach(function (task, index) {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${task} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);

        newEle.querySelector("i").addEventListener("click", function () {
        removeTask(index);
    });
    });
    }

        function Add() {
        if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        tasks.push(inputs.value);
        saveTasksToLocalStorage();
        renderTasks();
        inputs.value = "";
    }
    }

        function removeTask(index) {
        tasks.splice(index, 1);
        saveTasksToLocalStorage();
        renderTasks();
    }

        function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
