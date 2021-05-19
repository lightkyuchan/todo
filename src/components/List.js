import React, { useState } from 'react'

const List = ({data}) => {    
    const [isDone, setIsDone] = useState(data.isDone);
    const [todoData, setTodoData] = useState(data);

    const toggleDone = () => {
        fetch(`http://localhost:3001/todo/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({     
                ...data,           
                isDone: !isDone
            }),
        }).then(res => {
            if(res.ok) { setIsDone(!isDone)}            
        })  
    }
    
    const del = () => {
        fetch(`http://localhost:3001/todo/${data.id}`, {
            method: 'DELETE',
        }).then(res => {
            if(res.ok) { setTodoData({id:0}) }
        })
    }

    if(todoData.id === 0) { return null; }

    return (
        <tr>
            <td>{data.work}</td>
            <td>
              <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
              <button onClick={del}>삭제</button>
            </td>
        </tr>
    )
}

export default List
