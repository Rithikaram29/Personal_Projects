import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Home } from './pages/home'

function App() {
 

  return (
    <>
   <main className="bg-slate-300/20">
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
   </main>
    </>
  )
}

export default App
