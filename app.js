let task = document.querySelector('#task')
const taskBtn = document.querySelector(".taskBtn")
const taskItem = document.querySelector('.taskItem')
const textCont = document.querySelector('.textContent')
const main = document.querySelector('.main')
const delBtn = document.querySelector('.delBtn')
const taskCounter = document.querySelector('.taskCounter')
let completionCounter = document.querySelector('.completionCounter')
const checkbox = document.querySelector('.checkbox')
let ul = document.querySelector('.ul')

let key = ""

task.addEventListener('',(e)=>{    
    console.log(task.value);
    key = task.value   
})
let taskText = ""
function addNewTaskItem(text) {
    console.log(text);
  const newTaskItem = document.createElement("li");
  newTaskItem.className =
    "taskItem rounded-[10px] flex bg-white items-center justify-around h-[50px] w-[100%]";

  newTaskItem.innerHTML = `
    <input class="checkbox cursor-pointer" type="checkbox">
    <div class="textContent"></div>
    <button class="delBtn cursor-pointer bg-red-500 h-[30px] w-[60px] rounded-sm text-white">
      delete
    </button>
  `;
  newTaskItem.querySelector(".textContent").textContent = text;
  ul.appendChild(newTaskItem);

}

taskBtn.addEventListener('click',()=>{
    taskText = task.value.trim()

    if(taskText !==""){

        textCont.textContent = taskText
            addNewTaskItem(taskText)
            task.value = ""
            key = ""   
    }
})

let tasks = 0
let completeTasks = 0

ul.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.matches('.delBtn')){
      e.target.closest('.taskItem').remove()     
    } else if(e.target.matches('.checkbox')){
      console.log(e.target.closest(''));
    }
})


