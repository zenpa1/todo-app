// || REFERENCES //
// References for task list functionality
const addTaskBtn = document.getElementById('add-task-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// References for the toggle button
const modeContainer = document.getElementById('mode-container');
const modeButton = document.getElementById('mode-button');

// || FUNCTIONS //
// Functions to add a task
function addTask() {
    if (!validTask) {
        return;
    }

    const taskText = taskInput.value;

    // Check if the input is not empty
    if (taskText === '') {
        alert('Please enter a task.')
        return;
    }

    // Create a new list item element
    const listItem = document.createElement('li');

    // Set class of each list item
    listItem.setAttribute('class', 'list-item')

    // Set the text of each list item to the input provided
    const listContent = document.createElement('span');
    listContent.textContent = taskText;
    listItem.appendChild(listContent);

    // Create an edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'edit-task-button');
    listItem.appendChild(editBtn);

    // Allows editing task content
    editBtn.addEventListener('click', (event) => {
    const currentTaskContent = event.target.previousElementSibling;
    const newTaskContent = prompt('Edit task:', currentTaskContent.textContent);
    if (newTaskContent) {
        currentTaskContent.textContent = newTaskContent;
    }
});

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('class', 'delete-task-button');
    listItem.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field after adding a task
    taskInput.value = '';

    // Event listener to delete task when delete button is clicked
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });
}

function validTask() {
    if (taskInput.value == '') {
        return false;
    }

    return true;
}

// Functions to toggle Dark Mode and Light Mode
function setBackgroundColor(hexColor) {
    document.body.style.backgroundColor = hexColor;
}

function toggleMode() {
    const currentMode = modeContainer.getAttribute('class');
    if (currentMode === 'dark-mode') {
        // Styles everything in Light Mode
        modeContainer.setAttribute('class', 'light-mode');
        modeButton.setAttribute('class', 'dark-mode-button');
        modeButton.textContent='☾';
        setBackgroundColor('#e0e0e0');
    } else {
        // Styles everything in Dark Mode
        modeContainer.setAttribute('class', 'dark-mode');
        modeButton.setAttribute('class', 'light-mode-button');
        modeButton.textContent='☀';
        setBackgroundColor('#23272A');
    }
}

// || EVENT LISTENERS //
// Add event listener to the 'Add Task' button
addTaskBtn.addEventListener('click', addTask);

// Add event listener to the task input field
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Add event listener to the 'Dark Mode' button
modeButton.addEventListener('click', toggleMode)