import { v4 as uuidv4 } from 'uuid';
import "./ToDolist.css";
import { useState } from "react";


export default function ToDoList() {
    // let [toDos, setToDos] = useState([]);
    let [toDos, setToDos] = useState([{ task:"Sample Task", id : uuidv4(), isDone: false}]);
    let [newToDo, setNewToDo] = useState("");

    let  addNewTask = () => {
        // setToDos([...toDos, newToDo]);
        // Call Back👇
        setToDos((prevToDos) => {
          return [...prevToDos, { task: newToDo, id : uuidv4(), isDone: false}   ];
        });
        setNewToDo("");
    };

    let updateToDoValue = (event) => {
        setNewToDo(event.target.value);
    };
    
    // To delete a list item (filter method is used)
    let deleteToDo = (id) => {
      setToDos((prevToDos) => toDos.filter((prevToDos) => prevToDos.id != id));
    };

    //To turn all arrays into uppercase
    let upperCaseAll = () => {
      setToDos((prevToDos) => 
        prevToDos.map((toDo) => {
           return {
             ...toDo,
             task : toDo.task.toUpperCase(),
           };
        })
      );   
    };
    
    //To turn only one array into uppercase
    let upperCase = (id) => {
       setToDos((prevToDos) => 
        prevToDos.map((toDo) => {
          if (toDo.id == id) {
             return {
             ...toDo,
             task : toDo.task.toUpperCase(),
           };
          } else {
            return toDo;
          }
        })
      ); 
    };
    
    //Mark all array as done
    let markAllDone = () => {
      setToDos((prevToDos) => 
        prevToDos.map((toDo) => {
           return {
             ...toDo,
             isDone : true,
           };
        })
      );   
    };

    //Mark one array as done
    let markAsDone = (id) => {
       setToDos((prevToDos) => 
        prevToDos.map((toDo) => {
          if (toDo.id == id) {
             return {
             ...toDo,
             isDone : true,
           };
          } else {
            return toDo;
          }
        })
      ); 
    };




    return(
       <div className="todo-container">
         <h1>To Do List</h1>
         <input 
           placeholder="Add a Task"
           value={newToDo}
           onChange={updateToDoValue}
         >
         </input>
         <button onClick={addNewTask}>Add Task</button>
         <br></br><br></br><br></br>
         
         <hr></hr>
         <h4>Task to do :</h4>
         <ul>
            {/* {toDos.map((toDo, idx) => (
               <li key={idx}>{toDo}</li>
            ))} */}

            {toDos.map((toDo) => (
               <li key={toDo.id}>
                  <span style= {toDo.isDone ? {textDecorationLine : "line-through"} : {}}>{toDo.task}</span> 
                  <button onClick={ () => deleteToDo(toDo.id)}>Delete</button>
                  <button onClick={ () => upperCase(toDo.id)}>UpperCase</button>
                  <button onClick={ () => markAsDone(toDo.id)}>Mark As Done</button>
                </li>
            ))}
         </ul>

         <br></br>
         <button onClick={upperCaseAll}>UpperCase</button>
         <button onClick={markAllDone}>Mark all as done</button>
       </div>
    );
}