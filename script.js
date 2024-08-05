function addTask() {
    const name = document.getElementById('task-name').value;
    const deadline = document.getElementById('task-deadline').value;
    const time = document.getElementById('task-time').value;
    const priority = document.getElementById('task-priority').value;

    if (!name) {
        alert('Please enter a task name.');
        return;
    }

    const tasksList = document.getElementById('tasks');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span class="task-name">${name}</span> 
        <span class="task-deadline">Deadline: ${new Date(deadline).toLocaleString()}</span>
        <span class="task-time">Time: ${time} min</span>
        <span class="task-priority">Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
        <button class="complete-button" onclick="markComplete(this)">Mark Complete</button>
    `;

    tasksList.appendChild(taskItem);

    document.getElementById('task-name').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-time').value = '';
}

function markComplete(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
    if (taskItem.classList.contains('completed')) {
        alert('Task marked as complete!');
    }
}
