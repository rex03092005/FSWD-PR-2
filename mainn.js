export let tasks = [];

export function addTask(title, dueTime, priority) {
    try {
        if (!title || !dueTime || !priority) {
            throw new Error('Missing fields: title, dueTime, or priority.');
        }

        const task = { title, dueTime, priority };
        tasks.push(task);
    } catch (error) {
        console.error('Error adding task:', error.message);
    }
}

export function sortTasks() {
    return tasks.sort((a, b) => a.priority - b.priority); 
}

export function displayTasks(dueInMinutes) {
    const now = Date.now();
    const upcomingTasks = tasks.filter(task => {
        const taskDueTime = new Date(now + task.dueTime * 60000);
        return taskDueTime - now <= dueInMinutes * 60000;
    });

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 
    upcomingTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.title} (Priority: ${task.priority})`;
        taskList.appendChild(li);
    });
}

export function sendReminder(task) {
    setTimeout(() => {
        alert(`Reminder: ${task.title} is due!`);
    }, task.dueTime * 60000);
}
