import React from "react"

function Note(props){
    function handleCheck(){
        props.onCheck(props.id)
    }

    function handleClick(){
        props.onDelete(props.id);
        handleCheck()
    }

    function handleCheck(){
        props.onCheck(props.id)
    }

    return (
    <div className = "note" onClick = {handleCheck} style={{backgroundColor: props.completed?"green":null}}>
        {props.completed?<button onClick={handleClick}>DELETE</button>:null}
        <h1>{props.title}</h1>  
    </div> 
    )
}

export default Note