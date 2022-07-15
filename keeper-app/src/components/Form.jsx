import React, { useState } from 'react'

function Form(props){
    const [note, setNote] = useState({
        "title": "",
        "completed": false
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                title: value
            }
        })
    }

    function submit(event){
        props.onAdd(note)
        setNote({
            "title": "",
            "completed": false
        });
        event.preventDefault()
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
                <button onClick={submit} >ADD</button>
            </form>
        </div>
    )
}

export default Form;