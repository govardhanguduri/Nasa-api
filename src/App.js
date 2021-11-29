import React from 'react'
import {Route, Routes } from 'react-router'
import Form from './components/Form'
import List from './components/List'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/form" element={<Form/>} />
        <Route exact path="/list/:id" element={<List/>}/>
      </Routes>
    </div>
  )
}

export default App
