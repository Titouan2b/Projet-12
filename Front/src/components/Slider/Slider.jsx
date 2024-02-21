import { useEffect, useState } from 'react'
import './slider.scss'
import TypeIt from 'typeit-react'
import ProgressBar from '../ProgressBar/ProgressBar'

export default function Slider({slides}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [completed, setCompleted] = useState(0);

    const changeImage = (direction) => {
        setCurrentSlide((prevSlide) => {
            const index = direction === 'next' ? prevSlide + 1 : prevSlide - 1;
            return (index + slides.length) % slides.length;
        });

        setCompleted(0);
    };

  const handleMouseEnter = () => {

    setIsPaused(true);
  };

  const handleMouseLeave = () => {

    setIsPaused(false);
  };

  useEffect(() => {
      let intervalCompleted 
      if (!isPaused) {
          intervalCompleted = setInterval(() => {
              setCompleted((prevValue) => (prevValue < 100 ? prevValue + 1 : 100));
          }, 100); 
      }
      return () => clearInterval(intervalCompleted)
  }, [isPaused])


    useEffect(() => {
        if (completed >= 100) {
            changeImage('next');
            setCompleted(0);
        }
    }, [completed])


    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ProgressBar value={completed} bgcolor="#ffbf00" completed={completed}  />
        <div className="slider">
            <button className='button-left' onClick={() => changeImage('prev')}><i className="fa-solid fa-angle-left"></i></button>

            <div value={currentSlide} className='slider-content'>
                <i className={slides[currentSlide].icone}></i>
                <TypeIt
                    key={currentSlide} 
                    className="Comp"
                    as={"p"}
                    options={{
                        strings: [slides[currentSlide].paragraphe],
                        speed: 50,
                        waitUntilVisible: true,
                    }}
                />
            </div>
            <button className='button-right' onClick={() => changeImage('next')}><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </div>

    )
}