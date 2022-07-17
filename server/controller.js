 let tasks = require('./db.json');
 let globalID = 4;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
            const fortunes = ["All your hard work will soon pay off!", "Allow compassion to guide your decisions!", "An acquaintance of the past will affect you in the near future!"];
        
            // choose random fortune
            let randomIndex = Math.floor(Math.random() * fortunes.length);
            let randomFortune = fortunes[randomIndex];
        
            res.status(200).send(randomFortune);
    },


    getGoal: (req, res) => {
        // const goals = ["Goal of the day1!", "Goal of the day2", "Goal of the day3!"];
        const goals = tasks.map(currentTask => currentTask.task) 

        // choose random Task
        let randomIndex = Math.floor(Math.random() * goals.length);
        let randomGoal = goals[randomIndex];

        res.status(200).send(randomGoal);

    },

    getTask: (req, res) => {
        // console.error("im here")
        res.status(200).send(tasks)
        
    },

    deleteTask: (req, res) => {
        // console.error("im deleted")
        let index = tasks.findIndex(elem => elem.id === +req.params.id)
        tasks.splice(index, 1);
            res.status(200).send((tasks))
    },

    createTask: (req, res)=>{
        // console.error(req.body)
        const {task} = req.body;
        let newTask={
        id:globalID,
        task:task,
        }

        tasks.push(newTask);
        globalID++;
        res.status(200).send(tasks);
    },
}