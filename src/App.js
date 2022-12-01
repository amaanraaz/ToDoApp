import { useState } from 'react';
import './index.css'

function App() {
  const [todoList,settodoList] = useState([]);
  const [currentTask,setCurrentTask] = useState("");
  const [val,setVal] = useState('');

  return (
    <div>
    <div className="App">
      <h1>ToDo List</h1>
      <div className='todo'>

        <input type='text' placeholder='Enter task here...' value={val}
          onChange={(event)=>{
            setCurrentTask(event.target.value);
            setVal(event.target.value);
            
            }}
            onKeyDown={(event)=>{
              if(event.keyCode==13){
                settodoList([...todoList,currentTask]);
                setVal('');
              }
            }}
            ></input>

        <button onClick={()=>{
          settodoList([...todoList,currentTask]);
          setVal('');
        }}>Add</button>

      </div>
    </div>
      <hr className='line'/>
      <ul className='taskList'>
        {
            todoList.map((val,key)=>{
              return (
                  <div className='tasks-list'>
                    <li>{val}</li>
                    <button onClick={
                      ()=>{
                        settodoList(
                        todoList.filter((item)=>{
                          return item!==val
                        }))
                      }
                    }>Delete</button>
                  </div>
              )
            })
        }
      </ul>
    </div>
  );
}

export default App;
