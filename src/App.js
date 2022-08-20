import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [todo,setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  // useEffect(()=>{
  //   console.log("todoList update",todoList);
  // },[todoList])
  function changetodo(e){
    setTodo(e.target.value);
  }
  function addTodo(){
    
    const copyList=[...todoList];
    copyList.push(todo);
    setTodoList(copyList);
    setTodo("");
  }
  function deleteTodo(e,index){
    const copy=todoList.filter((element,ind)=>(index!==ind))
    setTodoList(copy);
  }
 return(
  <div className='mainBody'>
    <div className='header'>
      <input type="text" placeholder='Write here...' value={todo} className='inp' onChange={changetodo}/>
      <input type="button" className='btn'  value="ADD" onClick={addTodo}/>
    </div>
    
    <ul>
      {
        todoList.map((todos,index)=>{
          return <li className="list" key={index}>{todos}<button onClick={event => deleteTodo(event, index)} key={index} >X</button></li>
        })
      }
    </ul>

  </div>
 );
}

export default App;
