import React, { useEffect, useState } from 'react'
import './slider.scss'
import TypeIt from 'typeit-react'

export default function Slider({slides}) {



    //changement d'image avec les flèches
    const [currentSlide, setCurrentSlide] = useState(0) 
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    // const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
      const animationDuration = 5
    

      const changeImage = () => {
        if(!isPaused){
          setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length - 1)
          // setProgress(0)
          nextSlide()
        }
        
        // console.log(currentImageIndex)
      }

      // const startImageChangeTimeout = () =>{
      //   setInterval(changeImage, animationDuration * 1000)
      // }

      // setProgress(100)

      // const progressTimeout = setInterval(startImageChangeTimeout, 0)
      const interval = setInterval(changeImage, animationDuration * 1000)
      return() => {
       
        clearInterval(interval)
      }
    }, [currentSlide])

    // console.log(progress)

    const nextSlide = () => {
      setCurrentSlide((newSlide) => newSlide === slides.length -1 ? 0 : newSlide + 1)
      console.log(currentSlide)
    }

    const previousSlide = () => {
      setCurrentSlide((lastSlide) => lastSlide === 0 ? slides.length -1 : lastSlide - 1)
      console.log(currentSlide)
    }
    



  return (
    <div>
      <div className='load-competence' style={{width: `${progress}$`}}></div>
      <div className="slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <button className='button-left' onClick={previousSlide}><i className="fa-solid fa-angle-left"></i></button>

          <div className='slider-content'>
              <i className={slides[currentSlide].icone}></i>
              {/* <TypeIt
              className="Comp" 
              as={"p"}
              // getBeforeInit={(Comp) => {

              //   Comp.type(slides[currentSlide].paragraphe)

              //   return Comp
              // }}
              
              options={{
                strings: [slides[currentSlide].paragraphe], 
                speed: 100,
                waitUnilVisible: true,
                
              }}
              
              /> */}
              <p>{slides[currentSlide].paragraphe}</p>
          </div>
          <button className='button-right' onClick={nextSlide}><i className="fa-solid fa-angle-right"></i></button>

      </div>
    </div>

  )
}
