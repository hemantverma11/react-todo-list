import { useState } from 'react';
import './App.css';


function App() {
  let[todolist, setTodolist] = useState([]);



  function saveToDoList(event) {
    let toname = event.target.toname.value;
    
    if(!todolist.includes(toname)){
      let finalDolist = [...todolist, toname];
      setTodolist(finalDolist);
      event.target.reset(); // clears the input
    }
    else{
      alert("This task already exists in the list.");
    }

    event.preventDefault();
}

  let list = todolist.map((value,index) => {
    return(
      <ToDoListItems 
        value = {value} 
        key = {index}
        indexNumber = {index}
        todolist = {todolist}
        setTodolist = {setTodolist}
      />
    )
  })

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" placeholder='Write a new task' name='toname' />
        <button>Save</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}
export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist}) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todolist.filter((v,i) => i!==indexNumber);
    setTodolist(finalData);
  }
  
  let checkStatus = () => {
    setStatus(!status);
  }
  return (
    <li className={(status) ? 'completetodo': ''} onClick={checkStatus}> {indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
