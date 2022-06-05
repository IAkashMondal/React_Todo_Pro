import Todo from './Todocomponent/Todo';
import './App.css';
import React from 'react';
import styles from "../src/Todo.module.css"
function App() {
 let [input,setInput]=React.useState("")
 let [list,setList]=React.useState([])
 let [completed,setCompleted]=React.useState([])
 let [showtodo,setshowtodo]=React.useState(false)
return (
    <div className="App">
      <h2>To Do List</h2>
      <div className={styles.container}>
      <Todo showtodo={showtodo} setshowtodo={setshowtodo} completed={completed} setCompleted={setCompleted}list={list} input={input} setInput={setInput} setList={setList}></Todo>
      </div>
    </div>
  );
}

export default App;