import React, { useEffect, useState } from 'react'
import './projets.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Projet1 from '../../Pages/Projet_1/Projet_1'
import Projet2 from '../../Pages/Projet_2/Projet_2'
import Projet3 from '../../Pages/Projet_3/Projet_3'
import Projet4 from '../../Pages/Projet_4/Projet_4'
import { Animator, Fade, FadeOut, MoveIn, batch } from 'react-scroll-motion'


export default function Projets() {



  const [swicthColor, setSwicthColor] = useState(false)


  const changeBackground = () => {
    setSwicthColor(true)
  }


  const styleBackground = {
    backgroundColor: swicthColor ? '#D6D6D6' : '#ffffff'
  }







  return (
    <Animator animation={batch(Fade(0, 1), FadeOut(1, 1), MoveIn(0, 50))}>
      <div className='projets'>
        <div className='space-around'>
          <div className='nav'style={styleBackground} onClick={changeBackground}>
            <Link to="/">
              <h3 >Projet 1</h3>
            </Link>
          </div>
          <div className='nav' style={styleBackground} onClick={changeBackground}>
            <Link to="/Projet-2">
              <h3>Projet 2</h3>
            </Link>
          </div>
          <div className='nav' style={styleBackground} onClick={changeBackground}>
            <Link to="/Projet-3">
              <h3>Projet 3</h3>
            </Link>
          </div>
          <div className='nav' style={styleBackground} onClick={changeBackground}>
            <Link to="/Projet-4">
              <h3>Projet 4</h3>
            </Link>
          </div>
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
