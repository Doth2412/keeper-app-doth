import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import Form from './Form'
import NoteList from './NoteList'
import axios from 'axios'
import PropTypes from 'prop-types'

function App(){
    return(
        <div>
            <Header/>
            <NoteList/>
            <Footer />
        </div>
    );
}

export default App;