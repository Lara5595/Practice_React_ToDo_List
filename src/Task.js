import './App.css';

export const Task = (props) => {

    return (
        <div className="task" style={{ backgroundColor: props.completed ? "green" : "white" }} >
        <h1>{props.taskName}</h1>
            <div className="buttonContainer">
         <button className="buttonForTask" onClick={() => props.completeTask(props.id)}>Complete</button>
         <button className="buttonForTask" onClick={() => props.deleteTask(props.id)}>X</button>
            </div>
        </div>
)
}

