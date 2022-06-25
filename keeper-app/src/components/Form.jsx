import React, { useState } from 'react'

function Form(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submit(event){
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return(
        <div>
            <form>
                <input 
                    name = "title"
                    onChange={handleChange} 
                    value={note.title} 
                    placeholder="title"
                    
                /> 
                <textarea 
                    name = "content"
                    placeholder= 'Take a note' 
                    rows = "3" 
                    value={note.content}
                    onChange={handleChange}
                />
                <button onClick={submit}>ADD</button>
            </form>
        </div>
    )
}

export default Form;