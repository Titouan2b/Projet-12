import React, { useEffect, useState } from 'react'
import "./competence.scss"
// import "./competence.js"
import Slider from '../Slider/Slider.jsx'

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
      "paragraphe" : "coucou"
    },
    {
      "icone" : "fa-solid fa-camera",
      "paragraphe" : "coucou"
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
    <div className='competence'>
      <h2>Mes compétences</h2>
      <div className='load-competence' style={{width: `${progress}$`}}>      
      </div>
      <Slider slides={slidesContent}/>
    </div>
  )
}
