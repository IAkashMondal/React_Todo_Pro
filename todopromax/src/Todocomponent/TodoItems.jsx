import React from 'react'
import styles from "../Todo.module.css"

 const Todoitems = ({el:{id,title,arr},list,setList,completed, setCompleted}) => {
    let [status,setStatus]=React.useState(arr)
     let deleteitem=(id)=>{
         setList(list.filter((items)=>(items.id!==id)))
     }
     let removeteitem=(id)=>{
        setCompleted(completed.filter((items)=>(items.id!==id)))
    }
     let check=(e)=>{
         if(e.target.checked){
            setStatus(true)
            setList(list)
            completed.push({id,title,arr})
            setCompleted(completed)
        }
         else{
            setStatus(false)
            setList(list)
            removeteitem(id)
         }
     }
   
  return (
    
        <div style={{backgroundColor: status && "green"}} className={styles.itemdiv} key={id}>
            <div style={{display:"flex",gap:"15px"}}>
                <input   onChange={check}className={styles.input2} type="checkbox"  ></input>
                { status ? <div style={{width:"auto", backgroundColor:"green"}}><s>{title}</s>
                </div>:<div style={{width:"auto"}}>{title}</div>}
            </div>
           <div style={{display:"flex",gap:"15px",justifyContent:"space-between"}}>
                <button onClick={()=>deleteitem(id)}className={styles.bt2}>🗑️</button>
                <div style={{marginTop:"8%"}}><i class="fa-regular fa-star"></i></div>
           </div>
        </div>
    
  )
}
export default Todoitems