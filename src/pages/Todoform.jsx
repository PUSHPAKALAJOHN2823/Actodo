import React , {useState} from "react";



const Todoform = ({task , setTask , list , setList}) => {

    

    const handleChange = (event) => {
     setTask(event.target.value)
    }

    function handleAdd(){
        setList([...list , {id:list.length+1 , activity:task}])
    }


  return (
    <div className="">
      <h2 className="text-2xl font-medium mb-3">Manage Activities</h2>
      <input
        type="text"
        value={task}
        placeholder="Next Task?"
        className="border border-black bg-transparent p-1"
        onChange={handleChange}
      />
      <button className="bg-black text-white border border-black p-1" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Todoform;
