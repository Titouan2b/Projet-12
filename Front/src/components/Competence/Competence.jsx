import React, { useEffect, useState } from 'react'
import "./competence.scss"
// import "./competence.js"
import Slider from '../Slider/Slider.jsx'
import { Animator, Fade, FadeOut, MoveIn, batch } from 'react-scroll-motion'

export default function Competence() {
  

  const slidesContent = [
    {
      "icone" : "fa-brands fa-figma",
      "paragraphe" : "J'ai une maitrise normal sur figma, je peux créer une maquette d'un site internet fonctionnel"
    },
    {
      "icone" : "fa-solid fa-code",
      "paragraphe" : "A ce-jours, je connais plusieurs langage dont HTML & CSS, Javascript et React"
    },
    {
      "icone" : "fa-solid fa-palette",
      "paragraphe" : "J'ai quelque notion en infographie dans la modification de l'image et la création de logo simple (Photoshop et Illustrator)"
    },
    {
      "icone" : "fa-solid fa-camera",
      "paragraphe" : "J'ai des connaissances en audiovisuelle sur le montage vidéo (Premiere Pro) "
    }
  ]

  //changement d'image avec la progress bar
  


  return (
    <Animator animation={batch(Fade(0, 1), FadeOut(1, 1), MoveIn(0, 50))}>
      <div className='competence'>
        <h2>Mes compétences</h2>
        
        <Slider slides={slidesContent}/>
      </div>
    </Animator>
  )
}
