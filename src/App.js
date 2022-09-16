import React, { useState } from 'react';
import { GiHornedHelm } from 'react-icons/gi'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { IoMdAdd, IoIosTrash } from 'react-icons/io';
import { FaRegTrashAlt }from 'react-icons/fa';


function App() {

  const [task, setTask] = useState([]);
  const [input, setInput] = useState('');

  const prevent = (e) => {
    e.preventDefault();
  }

  //Add Tasks
  const submitHandler = function () {

    const addTask = {

      id: Math.floor(Math.random() * 1000),
      name: input,
      completed: false
    }

    console.log('Clicked')


    setTask([...task, addTask]);
    setInput('')
    

    
  }
//Delete Tasks  
  const deleteHandler = function (id) {

   let filteredTasks = [...task].filter(task => task.id !== id)
   setTask(filteredTasks)

}


//Complete Tasks

const successHandler = (id) => {
  setTask(
    task.map(task => (
      task.id === id ? {...task, completed: !task.completed } : task
    ))
  )
  
}

//Delete all

const deleteAll = (id) => {
 
  let filteredTasks = [...task].filter(task => task.id == id)
  setTask(filteredTasks)
  
}
  return (
    <div className='container'>
      <div className='innerb'>

          <div>
            <h1>Just doIt</h1>
          </div>

          <form onSubmit={prevent} className='firstForm'>
            <input className='finput' size='33' type='text' placeholder='Add a new todo' value={input} onChange={e => setInput(e.target.value)}></input>
            <button className="btn" onClick={submitHandler}><IoMdAdd/></button>
          </form>


          <div>
              {task.map(tasks => (
                <div  className={`taskcontainer ${tasks.completed ? 'completed' : ''}}`} onDoubleClick={() => successHandler(tasks.id)}  key={tasks.id}>
                  <p>{tasks.name}
                  <button className="delbtn" onClick={() => deleteHandler(tasks.id)}><FaRegTrashAlt />
                  </button>
                  </p>
                </div>))}
          </div>

          <div className='endcontainer'>
              <p>{task.length > 0 ? `You have ${task.length} tasks left` : 'You have no task left'}</p>
              <button onClick={()=> deleteAll() } className='clearall'>Clear All</button>
              
          </div>
      </div>
    </div>
    
  );
}

export default App;
