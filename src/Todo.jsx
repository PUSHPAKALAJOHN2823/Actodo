// import React, { useState } from "react";

// const Todo = () => {
//   const [list, setList] = useState([
//     { id: 1, task: "Read Book" },
//     {id:2 , task:"Have Breakfast"}

// ]);

// const [newItem , setNewItem] = useState("")



// function handleDelete(removeid) {

//     var temparr = list.filter(function(item){
//         if(item.id === removeid){
//             return false
//         }else{
//             return true
//         }
//     })
//     setList(temparr)
// }
    
    

// const handleAdd = () => {
//     setList([...list , {id:list.length+1 , task: newItem}])
    
   
// }


// const handleChange = (event) => {
//     setNewItem(event.target.value)

// }



//   return (
//     <div className="flex justify-around">
//       <section className="text-center  p-4">
//         <h1 className="text-4xl font-bold mb-5">Todo List Application</h1>
//         <input className="border border-black w-1/2" type="text" value={newItem} onChange={handleChange} placeholder="Add your tasks here"></input>
//         <button className="px-4 py-1 ml-3 bg-blue-600 rounded-lg" onClick={handleAdd}>Add</button>
//       </section>
//       <section className="p-3 text-start mt-5 w-full bg-purple-400">
//         <h2 className="text-3xl font-bold m-2">My List</h2>
//         <ul className="">
//           {list.map(function(item) {
//             return <li key={item.id} className="mb-4">{item.task} <button onClick={() =>{handleDelete(item.id)}} className="ml-3 px-3 py-1 bg-red-600 rounded-lg">Delete</button></li>;
//           })}
         
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Todo;



import React , {useState} from 'react';
import Todoform from './pages/Todoform';
import Todolist from './pages/Todolist';

const Todo = () => {

  const [task , setTask ] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      activity: "Wake Up at 6",
    },
  ]);


  return (
    <div className='flex gap-12 p-4 flex-wrap'>
      < Todoform  task={task} setTask={setTask} list={list} setList={setList}/>
      < Todolist  list={list} setList={setList}/>
      
     
      
    </div>
  )
}

export default Todo

