import React, { useState } from 'react';
import TodoFunction from "./TodoFunction";

function Todo() {


    const [data, setData] = useState('');
    const [array, setArray] = useState([]);
    const [display, setDisplay] = useState([]);

    const itemEvent = (event) => {
        setData(event.target.value);
    }

    function onAdd() {

        setArray((prevValue) => {
            return [...prevValue, data];
        })

        setData(' '); //to set the value of input == 0
    }

    function deleteItems(id) {
        setArray((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })

    }
    console.log(array);



    return (
        <div className="div_container">
            <div className="main_container">
                <input type="text" placeholder="Write an element" onChange={itemEvent} value={data} /> {/*value can be used to change the value of input.*/}
                <button onClick={onAdd}>+</button>
            </div>
            <div className="display">
                {
                    array.map((items, index) => {
                        return <TodoFunction items={items} onSelect={deleteItems} id={index} key={index} />
                    })
                }
            </div>
        </div>
    );
};

export default Todo;