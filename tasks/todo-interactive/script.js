/* Function to toggle the completion status of a task
This function is called when a task on the to-do-list is clicked */
function toggleTask(taskId) {
    const taskElement = document.getElementById(taskId);
    if (taskElement) {
        taskElement.classList.toggle('completed');
    }
}

//Function to add new tasks to the to-do-list
function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('todo-list');
    const taskId = 'task-' + Date.now();

    const newTask = document.createElement('li');
    newTask.id = taskId;
    newTask.setAttribute('onclick', `toggleTask('${taskId}')`);
    newTask.innerHTML = `
        ${taskText} <span class="tick-icon">✓</span>
    `;

    taskList.appendChild(newTask);
    taskInput.value = '';
}
