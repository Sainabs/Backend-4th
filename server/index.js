const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment,getFortune,getGoal,getTask,createTask,deleteTask,updateTask, updateTaskName} = require('./controller.js')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/goal",getGoal);

app.get("/api/task",getTask);
app.post('/api/task',createTask)
app.delete('/api/task/:id',deleteTask)
app.put('/api/task/:id',updateTask)
app.post('/api/task/updateName',updateTaskName)





app.listen(4000, () => console.log("Server running on 4000"));
