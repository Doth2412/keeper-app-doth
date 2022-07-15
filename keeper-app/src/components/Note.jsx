import React from "react"

function Note(props){
    function handleClick(){
        props.onDelete(props.id)
    }

    function handleCheck(event){
        props.onCheck(props.id)
        event.preventDefault()
    }

    return (
    <div className = "note">
        <h1>{props.title}</h1>
        {props.completed?<button onClick={handleClick}>DELETE</button>:null}
        <input type="checkBox" onClick={handleCheck}></input>       
    </div> 
    )
}

export default Note