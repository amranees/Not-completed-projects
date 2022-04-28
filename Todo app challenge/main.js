// Dark Theme 
let theme = document.querySelector('.theme');
theme.onclick = () => {
    // Change the header img 
    let header = document.querySelector('header');
    header.classList.toggle('dark');
    // Change theme Icon
    if (!(theme.classList.contains('dark'))) {
        theme.classList.add('dark')
        theme.src = './images/icon-sun.svg';
    } else {
        theme.className = '';
        theme.src = './images/icon-moon.svg';
    }

    // Change the rest of elements
    let body = document.querySelector('body');
    body.classList.toggle('dark');

    let create_container = document.querySelector('.create-container');
    create_container.classList.toggle('dark');

    let tasks_containers = document.querySelector('.tasks-container');
    tasks_containers.classList.toggle('dark');

    let footer = document.querySelector('.footer');
    footer.classList.toggle('dark');

    let stat = document.querySelector('.state');
    stat.classList.toggle('dark');
}

// Checked 

function checked() {

    let checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach(ele => {
        ele.onclick = () => {
            let check_icon = ele.querySelector('.check-icon');
            check_icon.classList.toggle('active')

            ele.classList.toggle('checked');
            ele.parentElement.classList.toggle('completed');
            if (ele.nextElementSibling.tagName === "LABEL") {

                ele.nextElementSibling.classList.toggle('checked');
            }

            remainTasks();
        }
    });
}
checked();


// Create task
let create_task = document.querySelector('.create-task');
let list = document.querySelector('.list');
create_task.onclick = () => {

    if (create_task.nextElementSibling.value.length > 0) {
        let task = document.createElement('div');
        task.classList.add('task')
        task.innerHTML = `
        <div class="checkbox">
        <img src="./images/icon-check.svg" alt="" class="check-icon">
        </div>
        <label for="">${create_task.nextElementSibling.value}</label>
        <img src="./images/icon-cross.svg" alt="" class="cross">
        `;
        // let footer = document.querySelector('.footer');
        list.append(task);
        create_task.nextElementSibling.value = '';

        deleteTask();
        let remain = document.querySelector('.remain span');
        remain.textContent++;
        checked();
    }
}

// Delete task 
function deleteTask() {
    let delete_task = document.querySelectorAll('.cross');
    delete_task.forEach(ele => {
        ele.onclick = () => {
            ele.parentElement.remove();
            remainTasks();
        }
    });
}
deleteTask();

let not_completed = document.querySelectorAll('.task');

// Set All Tasks 
let all_tasks = document.querySelectorAll('.task');
let all = document.querySelector('.all');
all.onclick = () => {
    showAll();
}

// Set Active Tasks
let active = document.querySelector('span.active');
active.onclick = () => {
    showAll();
    not_completed.forEach(ele => {
        if (ele.classList.contains('completed')) {
            ele.style.display = 'none';
        }
    })
    setState(active);
}

// Set completed tasks
let completed = document.querySelector('.completed');
completed.onclick = () => {
    showAll();
    all_tasks.forEach(ele => {
        if (!(ele.classList.contains('completed'))) {
            ele.style.display = 'none';
        }
    })

    setState(completed);
}


// Add `active` class to `state` 
function setState(state) {
    let all_states = document.querySelectorAll('.state span');
    all_states.forEach(ele => {
        ele.classList.remove('clicked');
    })
    state.classList.add('clicked');

}



// Remove completed tasks
let clear_completed = document.querySelector('.clear-completed');
clear_completed.onclick = () => {
    let completed_tasks = document.querySelectorAll('.task.completed');
    completed_tasks.forEach((ele) => {

        ele.remove();

    })
};


// Set remaining tasks 


function remainTasks() {

    let remain = document.querySelector('.remain span');
    let all_tasks = document.querySelectorAll('.task')
    let count = 0;
    all_tasks.forEach(ele => {
        if (!(ele.classList.contains('completed'))) {
            remain.textContent = ++count;
            // count++;
        }
        console.log(count);
    })
}
remainTasks();

// Show all tasks
function showAll() {
    let all_tasks = document.querySelectorAll('.task')
    all_tasks.forEach(ele => {
        ele.style.display = 'flex';
    })
}