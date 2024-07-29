let tasks = [];

function addTask(event) {
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <p><strong>Nombre:</strong> ${task.name}</p>
                <p><strong>Apellido:</strong> ${task.lastName}</p>
                <p><strong>Matrícula:</strong> ${task.matricula}</p>
                <p><strong>Fecha de entrega:</strong> ${task.date}</p>
                <p><strong>Tarea:</strong> ${task.task}</p>
            </div>
        `;

        if (task.file) {
            const fileLink = document.createElement('a');
            fileLink.href = URL.createObjectURL(task.file);
            fileLink.textContent = 'Ver archivo';
            fileLink.target = '_blank';
            li.appendChild(fileLink);
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteTask(index));
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

document.getElementById('taskForm').addEventListener('submit', addTask);
