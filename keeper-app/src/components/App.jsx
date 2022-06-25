import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import Form from './Form'

function App(){
    const [listNote, setListNote] = useState([])

    function addNote(newNote){
        setListNote(prevListNote => {
            return [...prevListNote, newNote]
        })
    }

    function deleteNote(id){
        setListNote(prevListNote =>{
            return prevListNote.filter((Item, index) => {
                return index !== id
            })
        })
    }

    return(
        <div>
            <Header/>  
            <Form onSubmit = {addNote}/>
            {listNote.map((Entry, index) => {
                return (<Note 
            key = {index}
            id = {index}    
            title = {Entry.title}
            content = {Entry.content}
            onDelete = {deleteNote}
            />)
            }
            )}
            <Footer />
        </div>
    );
}

export default App;