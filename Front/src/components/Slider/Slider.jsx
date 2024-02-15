import React, { useEffect, useState } from 'react'
import './slider.scss'
import TypeIt from 'typeit-react'
import ProgressBar from '../ProgressBar/ProgressBar'

export default function Slider({slides}) {

  //changement d'image avec les flèches
  const [currentSlide, setCurrentSlide] = useState(0) 
  const [isPaused, setIsPaused] = useState(false)
  const [completed, setCompleted] = useState(0)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  const changeImage = () => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length - 1)
      nextSlide()
  }

  const nextSlide = () => {
      setCurrentSlide((newSlide) => newSlide === slides.length -1 ? 0 : newSlide + 1)

      setCompleted(0)
  }

  const previousSlide = () => {
      setCurrentSlide((lastSlide) => lastSlide === 0 ? slides.length -1 : lastSlide - 1)

      setCompleted(0)
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPaused(false);
  };

  useEffect(() => {
    const intervalCompleted = setInterval(() => {
      setCompleted((prevValue) => (prevValue < 100 ? prevValue + 1 : 0))
      if(setCompleted === 100){
        setCurrentSlideIndex((prevIndex) => prevIndex === slides.length -1 ? 0 : prevIndex + 1)
      }
    
    }, 50)
    
      return () => clearInterval(intervalCompleted)
  }, [completed, slides.length, isHovered])

  useEffect(() => {
      if(!isPaused){
        const interval = setInterval(() => {
          changeImage()
        }, 5000)
        return() => {

          clearInterval(interval)
        }
      }
  }, [currentSlide, isPaused, slides.length, isHovered])


return (
  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ProgressBar value={completed} bgcolor="#ffbf00" completed={completed}  />
    <div className="slider" 
>
        <button className='button-left' onClick={previousSlide}><i className="fa-solid fa-angle-left"></i></button>

        <div value={currentSlideIndex} className='slider-content'>
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
