
import { addTask, displayTasks, sendReminder, sortTasks } from './mainn.js';

document.getElementById('addTaskBtn').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const dueTime = parseInt(document.getElementById('dueTime').value);
    const priority = parseInt(document.getElementById('priority').value);

    if (isNaN(dueTime) || isNaN(priority) || !title) {
        alert('Please fill in all fields with valid values!');
        return;
    }

    addTask(title, dueTime, priority);
    sortTasks(); 
    displayTasks(10);

    sendReminder({ title, dueTime, priority });

    document.getElementById('title').value = '';
    document.getElementById('dueTime').value = '';
    document.getElementById('priority').value = '';
});

document.getElementById('viewTasksBtn').addEventListener('click', () => {
    displayTasks(10);
});