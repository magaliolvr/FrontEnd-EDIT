const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add-btn");
const containerList = document.querySelector("ul");

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function setTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function buildListItem() {
  const newListItem = document.createElement("li");
  newListItem.classList.add("list-item");
  return newListItem;
}

function buildTextSpan(text) {
  const newTaskSpan = document.createElement("span");
  newTaskSpan.textContent = text;
  return newTaskSpan;
}

function applyStyleCompleted(newListItem, task) {
  if (task.isDone) {
    newListItem.classList.add("task-done");
  } else {
    newListItem.classList.remove("task-done");
  }
}

function markTaskIsDone(newListItem, index) {
  const tasks = getTasks();
  tasks[index].isDone = !tasks[index].isDone;

  setTasks(tasks);
  applyStyleCompleted(newListItem, tasks[index]);
}

function buildInputCheck(newListItem, index) {
  const tasks = getTasks();
  const newInputCheck = document.createElement("input");
  newInputCheck.type = "checkbox";
  newInputCheck.checked = tasks[index].isDone;
  applyStyleCompleted(newListItem, tasks[index]);
  newInputCheck.addEventListener("change", () => {
    markTaskIsDone(newListItem, index);
  });

  return newInputCheck;
}

function buildRemoveButton(index) {
  const newRemoveButton = document.createElement("button");
  newRemoveButton.textContent = "Remover";

  newRemoveButton.addEventListener("click", () => {
    const tasks = getTasks();
    tasks.splice(index, 1); //splice serve pra remover elementos de um array
    setTasks(tasks);
    renderTasks();
    checkTasksToApplyEmptyState();
  });

  return newRemoveButton;
}

function checkTasksToApplyEmptyState() {
  const listItems = document.querySelectorAll("li");
  const emptyListContainer = document.querySelector(".empty-list");

  if (listItems.length === 0) {
    emptyListContainer.style.display = "block";
  } else {
    emptyListContainer.style.display = "none";
  }
}

function addTask() {
  const newTask = { text: taskInput.value, isDone: false };
  let tasks = getTasks();
  tasks.push(newTask); //atribui um valor no final da lista
  setTasks(tasks);
  renderTasks();
  checkTasksToApplyEmptyState();
}

function isTaskFieldValid() {
  if (taskInput.value.trim() === "") {
    alert("Voce deve digitar algo para cadastrar uma tarefa");
    return false;
  }
  return true;
}

function renderTasks() {
  containerList.innerHTML = "";
  const tasks = getTasks();

  tasks.forEach((task, index) => {
    const newListItem = buildListItem();
    const newTaskSpan = buildTextSpan(task.text); //passa o texto para dentro TEXT no BUILDTEXTSPAN
    const newInputCheck = buildInputCheck(newListItem, index);
    const newRemoveButton = buildRemoveButton(index);

    newListItem.appendChild(newTaskSpan);
    newListItem.appendChild(newInputCheck);
    newListItem.appendChild(newRemoveButton);

    containerList.appendChild(newListItem);
  });
}

function loadTasks() {
  renderTasks();
  checkTasksToApplyEmptyState();
}

addBtn.addEventListener("click", () => {
  if (isTaskFieldValid()) {
    addTask();
    taskInput.value = "";
  }
});

document.addEventListener("DOMContentLoaded", loadTasks);
