import React, { useEffect, useState } from 'react'
import "./competence.scss"
import Slider from '../Slider/Slider.jsx'
import { Animator, Fade, FadeOut, MoveIn, batch } from 'react-scroll-motion'

export default function Competence() {
  

  const slidesContent = [
    {
      "icone" : "fa-brands fa-figma",
      "paragraphe" : "J'ai une maitrise normale sur figma, je peux créer une maquette d'un site internet fonctionnel"
    },
    {
      "icone" : "fa-solid fa-code",
      "paragraphe" : "À ce-jours, je connais plusieurs langages dont HTML & CSS, Javascript et React"
    },
    {
      "icone" : "fa-solid fa-palette",
      "paragraphe" : "J'ai quelques notions en infographie dans la modification de l'image et la création du logo simple (Photoshop et Illustrator)"
    },
    {
      "icone" : "fa-solid fa-camera",
      "paragraphe" : "J'ai des connaissances en audiovisuelles sur le montage vidéo (Premiere Pro) "
    }
  ]

  


  return (
    <div>
      <Animator className='desktop' animation={batch(Fade(0, 1), FadeOut(1, 1), MoveIn(0, 50))}>
        <div className='competence'>
          <h2>Mes compétences</h2>
          
          <Slider slides={slidesContent}/>
        </div>
      </Animator>
      
      <div className='competence tel'>
          <h2>Mes compétences</h2>
          
          <Slider slides={slidesContent}/>
        </div>
    </div>
  )
}
