import React, { useEffect, useState } from 'react'
import "./competence.scss"
// import "./competence.js"
import Slider from '../Slider/Slider.jsx'
import { Animator, Fade, MoveIn, batch } from 'react-scroll-motion'

export default function Competence() {
  const [currentImageIndex, setCurrentImageIndex] = useState()

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
  const [progress, setProgress] = useState()

  useEffect(() => {
    const animationDuration = 5
  

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slidesContent.length)
    setProgress(0)
  }

  const startImageChangeTimeout = () =>{
    setTimeout(changeImage, animationDuration * 1000)
  }

  setProgress(100)

  const progressTimeout = setTimeout(startImageChangeTimeout, 0)

  return() => {
    clearTimeout(progressTimeout)
  }
  }, [currentImageIndex, slidesContent])

  console.log(progress)


  return (
    <Animator animation={batch(Fade(0, 1), MoveIn(0, 50))}>
      <div className='competence'>
        <h2>Mes compétences</h2>
        <div className='load-competence' style={{width: `${progress}$`}}>      
        </div>
        <Slider slides={slidesContent}/>
      </div>
    </Animator>
  )
}
