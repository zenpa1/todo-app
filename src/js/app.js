// || REFERENCES //
// References for task list functionality
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// References for the toggle button
const modeContainer = document.getElementById('mode-container');
const modeButton = document.getElementById('mode-button');

// || FUNCTIONS //
// Function to add a task
function addTask() {
    const taskText = taskInput.value;

    // Check if the input is not empty
    if (taskText === '') {
        alert('Please enter a task.')
        return;
    }

    // Create a new list item element
    const listItem = document.createElement('li');

    // Set id of each list item for reference later
    listItem.setAttribute('id', 'list-item')

    // Set the text of each list item to the input provided
    listItem.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    
    // Append the delete button to the list item
    listItem.appendChild(deleteBtn);
    deleteBtn.setAttribute('id', 'delete-task-button')

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field after adding a task
    taskInput.value = '';

    // Event listener to delete task when delete button is clicked
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });
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