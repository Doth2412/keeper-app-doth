import React from "react"

function Note(props){
    function handleClick(){
        props.onDelete(props.id)
    }

    function handleCheck(){
        props.onCheck(props.id)
    }

    return (
    <div className = "note" style={{backgroundColor: props.completed?"green":null}}>
        {props.completed?<button onClick={handleClick}>DELETE</button>:null}
        <h1>{props.title}</h1>
        {props.completed?<input type = "checkBox" onClick={handleCheck} checked/>:<input type = "checkBox" onClick={handleCheck}/>}
        
    </div> 
    )
}

export default Note