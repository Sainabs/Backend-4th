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

const errCallback = err => console.log(err)

const getTasks = () => axios.get(baseURL).then(tasksCallback).catch(errCallback)

const createTask = body => axios.post(baseURL, body).then(tasksCallback).catch(errCallback)

const deleteTask = id => axios.delete(`${baseURL}/${id}`).then(tasksCallback).catch(errCallback)

const updateTask = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(tasksCallback).catch(errCallback)

function submitHandler(event) {
    event.preventDefault()
    let task = document.querySelector('#task')
    let bodyObj = {
        task: task.value 
    }
    createTask(bodyObj)
    task.value = ''
}


function createTaskCard(task) {
    const taskCard = document.createElement('div')
    taskCard.classList.add('task-card')

    taskCard.innerHTML = `<p class="task">${task.task}</p>
    <button onclick="deleteTask(${task.id})">delete</button>`
    tasksContainer.appendChild(taskCard)
}

function displayTasks(arr) {
    tasksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTaskCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getTasks()

