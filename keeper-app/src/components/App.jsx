import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

function App(){
    return(
        <div id = "container">
            <div id = "wrapper">
                <Header />  
                <Note />
            </div>
            <Footer />
        </div>
    );
}

export default App