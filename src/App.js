import './App.css';
import {useState} from "react";
import {Task} from "./Task";

function App() {
    // we are setting an empty array as the initial input
    const [todoList, setTodoList] = useState([])
    // This gets the task you input
    const [newTask, setNewTask] = useState("")

    const addTask = () => {

        // this checks if the task is empty then it will alert you
        if (!newTask) {
            alert("Please enter a task!");
            return;
        }

       const task = {
           id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
           taskName: newTask,
           complete: false,
       }


       // We are using the spread operator to get everything in the array and task gets the id
            setTodoList([...todoList, task])
        // this will reset the input field everytime we add a task
        setNewTask("");
    }
    const handleChange = (event) => {
        // this is how you get the value on the input change
        console.log(event.target.value)
        setNewTask(event.target.value)
    }

    const deleteTask = (id) => {
        // We are filtering through the array of todo list and getting the task if the taskName and task are equal then return false which deletes it else do nothing
        const newTodoList = todoList.filter((task) => {
            if (task.id === id) {
                return false
            } else {
                return true
            }
        })
        //  another way to write it is return task !== taskName
        setTodoList(newTodoList)
    }

    const completeTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id) {
                    return {...task, completed: true};
                } else {
                    return task;
                }
            })
        );
    };

    return (

<div>
    <h1 className="title">Just Do It</h1>
<div className="column">
    <div className="addTask">
        {/*By adding the value value={newtask} it clears the input search everytime we search*/}
        <input className="inputTask" value={newTask} onChange={handleChange}/>
        <button className="buttonForAddTask" onClick={addTask} >Add Task</button>
    </div>

</div>
    <div className="column2">
    <div className="list">
        {/* We are doing a .map through the todoList and displaying it*/}
        {todoList.map((task) => {
            return  <Task  taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />
        })}
    </div>
</div>
</div>
    )
}

export default App;
