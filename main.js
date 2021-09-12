let textbox = document.querySelector('#tasktext');
let btnAddtask = document.querySelector('#btn-addtask');
let btnPopup = document.querySelector('#btn-popup')
let popup = document.querySelectorAll('.popup')[0];
let tasksList = document.querySelectorAll('.taskslist')[0];

tasksList.addEventListener('click', (e) =>{
    const item = e.target;
    const itemText = item.querySelector('p');
    if(item.classList[0] === 'task'){
        itemText.classList.toggle('completed');
    }
    
})

tasksList.addEventListener('click', (e) =>{
    const item = e.target;
    if(item.classList[0] === 'btn-task'){
        item.parentElement.remove();
    }

    if(tasksList.children.length === 0){
        tasksList.classList.remove('tlvisible');
    }
})

btnAddtask.addEventListener('click', () =>{
    if(textbox.value == ''){
        popup.classList.remove('invisible');
    }
    else{
        popup.classList.add('invisible');

        tasksList.classList.add('tlvisible');

        task = document.createElement('div');
        task.classList.add('task');

        taskText = document.createElement('p');
        taskText.classList.add('taskInnerText');
        taskText.innerText = textbox.value;

        taskBtn = document.createElement('button');
        taskBtn.classList.add('btn-task');
        taskBtn.innerText = 'X';

        task.appendChild(taskText);
        task.appendChild(taskBtn);

        tasksList.appendChild(task);
        textbox.value = '';
    }
});

btnPopup.addEventListener('click', () =>{
    popup.classList.add('invisible');
});

