import { useRef } from 'react'

const AddItem = () => {    
    const inputRef = useRef(null);                  

    const add = () => {
        fetch('http://localhost:3001/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                work: inputRef.current.value,
                isDone: false
            }),
        }).then(res => {
            if(res.ok) {                 
                alert('할일이 추가되었어요!!');
            }            
        })            
    }    

    return (
        <div className="add">            
            <input ref={ inputRef } type="text" placeholder="오늘 할 일을 적어주세요"></input>
            <button onClick={ add }>ADD</button>
            
        </div>
    )
}

export default AddItem
