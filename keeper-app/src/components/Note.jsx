import React from "react"

function Note(props){
    function handleClick(){
        console.log(props.id)
        props.onDelete(props.id)
    }

    return (
    <div className = "note">
        <h1>{props.title}</h1>
        <button onClick={handleClick}>DELETE</button>
    </div> 
    )
}

export default Note