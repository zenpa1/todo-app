// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
const darkModeBtn = document.getElementById('dark-mode-button');

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

    // Set id of each list item in order to reference for later
    listItem.setAttribute('id', 'list-item')

    // Make each list item draggable for drag and drop functionality
    listItem.setAttribute('draggable', 'true');

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

// Function to toggle Dark Mode
function toggleDarkMode() {
    return;
}

// Add event listener to the 'Add Task' button
addTaskBtn.addEventListener('click', addTask);

// Add event listener to the task input field
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Add event listener to the 'Dark Mode' button
darkModeBtn.addEventListener('click', toggleDarkMode)