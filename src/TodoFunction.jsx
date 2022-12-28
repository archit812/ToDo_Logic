import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";


function TodoFunction(props) {


    return (
        <>
            <ul>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <li>{props.items}</li>&nbsp; &nbsp;
                    <AiOutlineClose style={{ cursor: 'pointer' }} onClick={() => {
                        console.log(props.onSelect(props.id))
                    }} />
                </div>
            </ul>
        </>
    )
}

export default TodoFunction;