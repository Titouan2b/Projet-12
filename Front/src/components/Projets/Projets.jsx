import React from 'react'
import './projets.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Projet1 from '../../Pages/Projet_1/Projet_1'
import Projet2 from '../../Pages/Projet_2/Projet_2'
import Projet3 from '../../Pages/Projet_3/Projet_3'
import Projet4 from '../../Pages/Projet_4/Projet_4'
import { Animator, Fade, MoveIn, batch } from 'react-scroll-motion'

export default function Projets() {
  return (
    <Animator animation={batch(Fade(0, 1), MoveIn(0, 50))}>
      <div className='projets'>
        <div className='space-around'>
          <Link to="/">
            <h3>Projet 1</h3>
          </Link>
          <Link to="/Projet-2">
            <h3>Projet 2</h3>
          </Link>
          <Link to="/Projet-3">
            <h3>Projet 3</h3>
          </Link>
          <Link to="/Projet-4">
            <h3>Projet 4</h3>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Projet1/>} />
          <Route path='/Projet-2' element={<Projet2/>} />
          <Route path='/Projet-3' element={<Projet3/>} />
          <Route path='/Projet-4' element={<Projet4/>} />
        </Routes>
      </div>
    </Animator>
  )
}
