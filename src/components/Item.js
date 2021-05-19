import React, { useEffect, useState } from 'react'
import List from './List';

const Item = () => {
    const [todoData, setTodoData] = useState([]);            

    useEffect(() => {
        fetch('http://localhost:3001/todo')
            .then(res => res.json())
            .then(data => {
                setTodoData(data);                
            })
    },[todoData])
    
    return (
        <table className="list">      
          <tbody>
            {
              todoData.map(data => 
                <List data={data} key={data.id} />  
              )
            }
          </tbody>
        </table>
    )
}

export default Item
