import React, { useState } from "react";

const Todolist = ({list , setList}) => {
  

  function handleDelete(removeid) {
    const temparr = list.filter((item) => item.id !== removeid);
    setList(temparr);
  }

  return (
    <div className="bg-blue-300 border rounded p-2 flex-grow mt-2">
      <h1 className="text-2xl font-medium">Today's Activity</h1>

      {list.length === 0 ? (
        <p>You haven't added anything</p>
      ) : (
        <ul>
          {list.map((item, index) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <span>
                {index + 1}. {item.activity}
              </span>
              <button onClick={() => handleDelete(item.id)}>
                <i
                  className="fa-solid fa-trash"
                  style={{ color: "#f70202" }}
                ></i>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todolist;
