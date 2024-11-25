const form = document.getElementById('todo-form');
const Completed = document.getElementById('completed');
const notCompleted = document.getElementById('not-completed');

let task=[];

function addTask(task){
    tasks.push({text:task,done:false});
    renderList();
}

function toggleTask(index){
    tasks[index].done =!tasks[index].done;
    renderList();
}

function renderList(){
    completed.innerHTML ='';
    notCompleted.innerHTML = '';
    tasks.forEach((task,index) => {
        const item = document.createElement('li');
        item.textContent = task.text;
        item.classList.add('task-item');
        if(task.done){
            item.classList.add('done');
            completed.appendchild(item);
        }else{
            notCompleted.appendChild(item);
        }
        item.addEventListener('click',() =>{
            toggleTask(index);
        });
    });
}

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const task = input.ariaValueMax.trim();
    if (task){
        addTask(task);
        input.value ='';
    }
});

renderList();