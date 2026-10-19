const taskInput = document.querySelector("#task");
const taskButton = document.querySelector(".taskBtn");
const taskList = document.querySelector(".ul");
const taskCounter = document.querySelector(".taskCounter");
const completionCounter = document.querySelector(".completionCounter");

function updateCounters() {
  const tasks = taskList.querySelectorAll(".taskItem");
  const completedTasks = taskList.querySelectorAll(
    ".taskItem .checkbox:checked",
  );

  taskCounter.textContent = tasks.length;
  completionCounter.textContent = completedTasks.length;
}

function addNewTaskItem(text) {
  const taskItem = document.createElement("li");
  taskItem.className =
    "taskItem rounded-[10px] flex bg-white items-center justify-around h-[50px] w-[100%]";

  taskItem.innerHTML = `
    <input class="checkbox cursor-pointer" type="checkbox">
    <div class="textContent"></div>
    <button class="delBtn cursor-pointer bg-red-500 h-[30px] w-[60px] rounded-sm text-white">
      delete
    </button>
  `;
  taskItem.querySelector(".textContent").textContent = text;
  taskList.appendChild(taskItem);
  updateCounters();
}

taskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addNewTaskItem(taskText);
    taskInput.value = "";
  }
});

taskList.addEventListener("change", (event) => {
  if (event.target.matches(".checkbox")) {
    updateCounters();
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.matches(".delBtn")) {
    event.target.closest(".taskItem").remove();
    updateCounters();
  }
});
