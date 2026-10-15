let task = document.querySelector('#task')
const taskBtn = document.querySelector(".taskBtn")
const main = document.querySelector('.main')
let taskItem = document.querySelector('.taskItem')
const textCont = document.querySelector('.textContent')
const delBtn = document.querySelector('.delBtn')
const taskCounter = document.querySelector('.taskCounter')
let completionCounter = document.querySelector('.completionCounter')
const checkbox = document.querySelector('.checkbox')
let ul = document.querySelector('.ul')

let key = ""

task.addEventListener('keydown',(e)=>{
    
    key += e.key   
})


function addNewTaskItem(){     
    
    ul.appendChild(taskItem) 
    
} 

taskBtn.addEventListener('click',()=>{
    textCont.innerHTML = key
    addNewTaskItem()
    task.value = ""
})

let checkClick = false


checkbox.addEventListener('click',(e)=>{
    console.log(e.target);
    checkClick = true
    if(checkClick == true){
        completionCounter+1
    }else{
        console.log("svg");
    }
})