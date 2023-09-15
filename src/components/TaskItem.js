
import "./TaskItem.css";
import "./taskDate";
import TaskDate from "./taskDate";
function TaskItem(props){

    // const taskDate = new Date(2001,11,9)
    // const taskTitle = "Osama"
    // const Taskpriority = 1;
 
    return (
    <div className="task-item">

           <TaskDate date ={props.date}></TaskDate>
             
        
        <div className="task-item__description"></div>
        <h2>{props.title}</h2>
        <div className="task-item__priority">{props.priority}</div>
    
    </div>
    );
}

export default TaskItem