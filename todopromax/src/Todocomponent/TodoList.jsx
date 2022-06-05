import React from 'react'
import Todoitem from '../Todocomponent/TodoItems'
 const Todolist = ({el,list,setList,completed, setCompleted,setTick ,tick}) => {
   
  return (
     
    <div>
        <Todoitem setTick={setTick}tick={tick} completed={completed} 
         setCompleted={setCompleted} el={el} list={list} setList={setList}>
         </Todoitem>
    </div>
  )
}

export default Todolist