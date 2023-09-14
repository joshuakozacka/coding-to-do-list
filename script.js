let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${task}</span>
      <span class="edit-btn" onclick="editTask(${index})">Edit</span>
      <span class="delete-btn" onclick="deleteTask(${index})">Delete</span>
    `;
    taskList.appendChild(listItem);
  });
}

function addTask(event) {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");
  const task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit the task:", tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

document.getElementById("task-form").addEventListener("submit", addTask);
