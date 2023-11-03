import React, { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import { addTodo, getAllTodo, updateTodo, deleteTodo } from './utils/HandleApi';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(()=>{
    getAllTodo(setTodoData)
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  }

  return (
    <div className='App'>
        <div className='container'>
            <h2>ToDo App</h2>
            <div className='top'>
                <input 
                type='text' 
                placeholder='enter todos...' 
                value={text}
                onChange={(e)=> setText(e.target.value)}
                />
                <div 
                className='add' 
                onClick={isUpdating ?
                 () => updateTodo(todoId, text, setTodoData, setText, setIsUpdating) : 
                 () => addTodo(text, setText, setTodoData)} >
                  {isUpdating ? "Update" : "Add"}
                </div>
            </div>
            <div className='list'>
              {todoData.map((item)=>
               <ToDo key={item._id} text={item.text} 
                updateMode={() => updateMode(item._id, item.text)}
                deleteTodo={() => deleteTodo(item._id, setTodoData)}
              /> 
               )}
            </div>
        </div>
    </div>
  )
}
export default App