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
        tasksList.classList.add('tlvisible');
        tasksList.innerHTML += `
        <div class="task">
            <p>${textbox.value}</p>
            <button class="btn-task">X</button>
        </div>
        `;

        textbox.value == '';

        let btnTask = document.querySelectorAll('btn-task');
        for(let i=0; i< btnTask.length; i++){

            btnTask[i].addEventListener('click', () =>{
                btnTask[i].parentNode.remove();
            });
        }

        let task = document.querySelectorAll('.task');
        for(let i=0; i<task.length; i++){
            task[i].addEventListener('click', () =>{
                task[i].classList.toggle('completed');
            });
        }

    }
});

btnPopup.addEventListener('click', () =>{
    popup.classList.add('invisible');
});

