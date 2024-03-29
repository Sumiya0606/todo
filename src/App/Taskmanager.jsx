import { useState } from "react";
import './style.css'
function Taskmanager() {
    const [tasks, setTasks] = useState([]);
    const [inputvalue, setInput] = useState("");
    function addTask() {
        if (inputvalue.length === 0) {
            return;
        }
        setTasks([...tasks, 
            { content:inputvalue,
                isComplete:false,
                isEdit:false
            }]);
        setInput("");
    }
    function editTask(taskindex)
    {
        tasks[taskindex].isEdit=true;
        setTasks([...tasks])
    }
    function markCompleted(taskindex){
        tasks[taskindex].isComplete=!tasks[taskindex].isComplete;
        setTasks([...tasks])
    }
    function deleteTask(taskindex) {
        tasks.splice(taskindex, 1)
        setTasks([...tasks])
    }
    function updateValue(taskindex,value)
    {
        tasks[taskindex].content=value;
        setTasks([...tasks])
    }
    function saveTask(taskindex)
    {tasks[taskindex].isEdit=false;
        setTasks([...tasks])
    }
    return (
        <div className="Taskmanager">
            <h1>Task Manager</h1>
            <div className="tasks">
            {
                tasks.sort((a)=>a.isComplete?1:-1).map((task, index) =><div className={"task"} key={index}><input type="checkbox" 
                checked={task.isComplete} onChange={()=>markCompleted(index)}/>
               {
                    task.isEdit ?<input className="editinput" value={task.content} onChange={(event)=>updateValue(index,event.target.value)}/>
                   :
                  <span className="content"> {
                    task.isComplete?<del>{task.content}</del>:task.content
                }{'   '}</span>
                    

                
                    
                    
                }
                {
                    task.isEdit?
                    <button className="save" onClick={() => saveTask(index)}>Save</button>:
                    <button className="edit" onClick={()=>editTask(index)}>Edit</button>
                }
                <button  className="delete"onClick={() => deleteTask(index)}>Delete</button>
                </div>)
                
            }
            </div>
            <div className="addtaskcontainer">
                <input value={inputvalue} placeholder="Enter a task" onChange={(event) => setInput(event.target.value)} />
                <button onClick={addTask}>Add Task</button>
            </div>
        </div>




    )
}
export default Taskmanager;