import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'
import Form from './Form'

function NoteList(){
    const [listNote, setListNote] = useState([])

        // useEffect(()=>{
        //     const getTodos = async() =>{
        //         try{
        //             const res = await axios.get(
        //                 'https://jsonplaceholder.typicode.com/todos?_limit=10')
        //         }
        //         catch(error){
        //             console.log(error.message)
        //         }
        //     }

        //     getTodos()
        // }, [])

        function checkNote(id){
            const newList = listNote.map(note => {
                if (note.id === id) note.completed = !note.completed
                return note
            })
            setListNote(newList)
        } 
        
        function addNote(newNote){
            setListNote(prevListNote => {
                return [...prevListNote, newNote]
            })
        }
        
        function deleteNote(id){
            setListNote(prevListNote =>{
                return prevListNote.filter((item, index) => {
                    return index !== id
                })
            })
        }

    return (
        <div>
            <Form onAdd = {addNote}/>
          {listNote.map((note, index) => {
            return (
              <Note
                key={index}
                id = {index}
                title={note.title}
                onCheck={checkNote}
                onDelete={deleteNote}
              />
            )
          })}
        </div>
      )
}

export default NoteList

