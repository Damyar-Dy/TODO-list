let textbox = document.querySelector('#tasktext');
let btnAddtask = document.querySelector('#btn-addtask');
let btnPopup = document.querySelector('#btn-popup')
let popup = document.querySelectorAll('.popup')[0];
let tasksList = document.querySelectorAll('.taskslist')[0];

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
        taskBtn = document.createElement('button');
        taskBtn.classList.add('btn-task');
        taskBtn.innerText = 'X';
        taskText.innerText = textbox.value;
        textbox.value = '';
        task.appendChild(taskText);
        task.appendChild(taskBtn);
        tasksList.appendChild(task);

        task.addEventListener('click', () =>{
            for( let x in tasksList.childNodes){
                taskText.classList.toggle('completed');
            }
        })
    }

    taskBtn.addEventListener('click', () =>{
        tasksList.removeChild(task);
    })
});

btnPopup.addEventListener('click', () =>{
    popup.classList.add('invisible');
});

