import React, { useState } from "react";

function App() {

  const [name, setname] =useState("");
  const[items, setitems] = useState([]);
  
  function namehandle(event){
    setname(event.target.value);
  }
  function additems(){
    setitems(sample => {
      return [...sample, name];
    });
    setname("");
   }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={namehandle}type="text"  value={name}/>
        <button onClick={additems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(nofitems => <li>{nofitems}</li> )}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
