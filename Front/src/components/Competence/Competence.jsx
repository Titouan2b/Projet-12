import React, { useEffect, useState } from 'react'
import "./competence.scss"
// import "./competence.js"
import Slider from '../Slider/Slider.jsx'
import { Animator, Fade, MoveIn, batch } from 'react-scroll-motion'

export default function Competence() {
  

  const slidesContent = [
    {
      "icone" : "fa-brands fa-figma",
      "paragraphe" : "coucou"
    },
    {
      "icone" : "fa-solid fa-code",
      "paragraphe" : "salut"
    },
    {
      "icone" : "fa-solid fa-palette",
      "paragraphe" : "3"
    },
    {
      "icone" : "fa-solid fa-camera",
      "paragraphe" : "4"
    }
  ]

  //changement d'image avec la progress bar
  


  return (
    <Animator animation={batch(Fade(0, 1), MoveIn(0, 50))}>
      <div className='competence'>
        <h2>Mes compétences</h2>
        
        <Slider slides={slidesContent}/>
      </div>
    </Animator>
  )
}
