import React, { useState } from "react";

function App() {

  const [data, setData] = useState();
  const [array, setArray] = useState([]);

  const itemEvent = (event) => {
    setData(event.target.value)
  }

  const listOfItems = () => {
    setArray((previousData) => {
      return [...oldData, data]
    })
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>To DO List</h1>
        <br />
        <input type="text" name="" placeholder="items" onChange={itemEvent} />
        <button onClick={() => listOfItems()} type="button">+</button>
        <ol>
          {
            array.map((items) => {
              return <li>{items}</li>
            })
          }
        </ol>
      </div>
    </div>
  );
};

export default App;