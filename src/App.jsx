import React, { useState } from "react";
import Todo from "./Todo";
import Header from "./pages/Header";
import Card from './pages/Card';




const App = () => {
  return (
    <div className="bg-black h-screen p-36">
      <div className="bg-slate-100 p-2 w-full h-fit mx-auto rounded-lg">
        <Header />
        <Card />
        <Todo />

      </div>
      
    </div>
  );
};

export default App;
