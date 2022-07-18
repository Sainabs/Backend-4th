// ///////-----this is made by teacher for example---
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


////// ------------this works----------------------------------/////


const getFortuneBtn=document.getElementById('fortuneButton');

const getFortune = ()=> {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
});
}

getFortuneBtn.addEventListener('click', getFortune);


////////-------this works------------------------------///////////
const getGoalBtn=document.getElementById('goalButton');
const getGoal = ()=> {
    axios.get("http://localhost:4000/api/goal/")
    .then(res => {
        const data = res.data;
        alert(data);
});
} 

getGoalBtn.addEventListener('click', getGoal);




// /////-------made this to sumit taks in the web,,this crashes the nodemon server/index.js-----------////

const tasksContainer = document.querySelector('#tasks-container');
const form = document.querySelector('form');


const baseURL = `http://localhost:4000/api/task`

const tasksCallback = ({ data: tasks }) => displayTasks(tasks);
const errCallback = err => console.log(err.response.data)

const getAllTasks = () => axios.get(baseURL).then(tasksCallback).catch(errCallback)
const createTask = body => axios.post(baseURL, body).then(tasksCallback).catch(errCallback)
const deleteTask = id => axios.delete(`${baseURL}/${id}`).then(tasksCallback).catch(errCallback)
const updateTask = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(tasksCallback).catch(errCallback)
const updateTaskName = body => axios.post(`${baseURL}/updateName`, body).then(tasksCallback).catch(errCallback)

function submitHandler(event) {
    event.preventDefault()
    let task = document.querySelector('#task')
    let rating = document.querySelector('input[name="ratings"]:checked')
    
    let bodyObj = {
        task: task.value, 
        rating: rating.value
    }
    createTask(bodyObj)
    task.value = ''
    rating.checked = false
}


function createTaskCard(task) {
    const taskCard = document.createElement('div')
    taskCard.classList.add('task-card')

    taskCard.innerHTML = `<p class="task">${task.task}</p>
    <div class="btns-container">
        <button onclick="updateTask(${task.id}, 'minus')">-</button>
        <p class="task-rating">${task.rating} stars</p>
        <button onclick="updateTask(${task.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteTask(${task.id})">delete</button>`
    
    tasksContainer.appendChild(taskCard)
}

function displayTasks(arr) {
    tasksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTaskCard(arr[i])
    }
}

function UpdateTaskName(){
    //console.error("wrong update")
    let UpdateName = document.querySelector('#updateName')
    let UpdateId = document.querySelector('#updateId')
    console.error(UpdateId.value)

    let bodyObj = {
        UpdateName: UpdateName.value, 
        UpdateId: UpdateId.value
    }
    updateTaskName(bodyObj)
    task.value = ''
    rating.checked = false

}

form.addEventListener('submit', submitHandler)
getAllTasks()

