import React, { useEffect, useState } from 'react'
import './slider.scss'
import TypeIt from 'typeit-react'

export default function Slider({slides}) {

  //changement d'image avec les flèches
  const [currentSlide, setCurrentSlide] = useState(0) 
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const animationDuration = 30

  const changeImage = () => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length - 1)
      nextSlide()
  }

  const nextSlide = () => {
      setCurrentSlide((newSlide) => newSlide === slides.length -1 ? 0 : newSlide + 1)
      console.log(currentSlide)
      setProgress(0)
  }

  const previousSlide = () => {
      setCurrentSlide((lastSlide) => lastSlide === 0 ? slides.length -1 : lastSlide - 1)
      console.log(currentSlide)
      setProgress(0)
  }

  useEffect(() => {
      if(!isPaused){
        const interval = setInterval(changeImage, animationDuration * 1000)
        return() => {

          clearInterval(interval)
        }
      }
  }, [currentSlide, isPaused])

return (
  <div>
    <div className='load-competence' style={{width: `${progress}$`}}></div>
    <div className="slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <button className='button-left' onClick={previousSlide}><i className="fa-solid fa-angle-left"></i></button>

        <div className='slider-content'>
            <i className={slides[currentSlide].icone}></i>
            <TypeIt
                key={currentSlide} // Pour forcer le rechargement du composant
                className="Comp"
                as={"p"}
                options={{
                    strings: [slides[currentSlide].paragraphe],
                    speed: 50,
                    waitUntilVisible: true,
                }}
            />

        </div>
        <button className='button-right' onClick={nextSlide}><i className="fa-solid fa-angle-right"></i></button>

    </div>
  </div>

)
}
