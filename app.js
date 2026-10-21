const taskInput = document.querySelector("#task");
const taskButton = document.querySelector(".taskBtn");
const taskList = document.querySelector(".ul");
const taskList2 = document.querySelector(".ul2");
const taskList3 = document.querySelector(".ul3");


function addCompletedTask(text){
  console.log(text);
  const taskItem3 = document.createElement("li");
  taskItem3.className =
    "taskItem rounded-[10px] flex bg-white items-center justify-around h-[50px] w-[100%]";
  taskItem3.innerHTML = `
    <div class="textContent3"></div>
    <button class="delBtn cursor-pointer bg-red-500 h-[30px] w-[60px] rounded-sm text-white">
      delete
    </button>
    `;
  taskItem3.querySelector(".textContent3").textContent = text;
  taskList3.appendChild(taskItem3);
}

function addProgress(text){
  console.log(text);
  const taskItem2 = document.createElement("li");
  taskItem2.className =
    "taskItem rounded-[10px] flex bg-white items-center justify-around h-[50px] w-[100%]";

  taskItem2.innerHTML = `
    <input class="checkbox cursor-pointer" type="checkbox">
    <div class="textContent2"></div>
    <button class="delBtn cursor-pointer bg-red-500 h-[30px] w-[60px] rounded-sm text-white">
      delete
    </button>
  `;
  taskItem2.querySelector(".textContent2").textContent = text;
  taskList2.appendChild(taskItem2);
}

function addNewTaskItem(text) {
  console.log(text);
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
  
}

taskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {   
    addNewTaskItem(taskText);   
    taskInput.value = "";
  }
});

taskList.addEventListener("change", (e) => {
  if (!e.target.matches(".checkbox") || !e.target.checked) return; {
    const taskItem = e.target.closest(".taskItem");
    const text = taskItem.querySelector(".textContent").textContent;

    addProgress(text);
  }
});

taskList2.addEventListener("change", (e) => {
  if (!e.target.matches(".checkbox") || !e.target.checked) return; {
    const taskItem = e.target.closest(".taskItem");
    const text = taskItem.querySelector(".textContent2").textContent;  
    addCompletedTask(text);
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.matches(".delBtn")) {
    e.target.closest(".taskItem").remove(); 
  }
});

taskList2.addEventListener("click", (e) => {
  if (e.target.matches(".delBtn")) {
    e.target.closest(".taskItem").remove(); 
  }
});

taskList3.addEventListener("click", (e) => {
  if (e.target.matches(".delBtn")) {
    e.target.closest(".taskItem").remove(); 
  }
});

