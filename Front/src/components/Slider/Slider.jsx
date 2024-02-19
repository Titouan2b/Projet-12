import { useEffect, useState } from 'react'
import './slider.scss'
import TypeIt from 'typeit-react'
import ProgressBar from '../ProgressBar/ProgressBar'

export default function Slider({slides}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [completed, setCompleted] = useState(0);

    /*
    simplification de la fonction next et prev en faisant tout dans la même fonction
     */
    const changeImage = (direction) => {
        setCurrentSlide((prevSlide) => {
            // Condition ternaire pour faire avancer ou reculer dans le slider
            const index = direction === 'next' ? prevSlide + 1 : prevSlide - 1;
            // Gèrer la boucle du slider en restant dedans grâce à un modulo (%) sur la longueur du tableau
            return (index + slides.length) % slides.length;
        });
        // Réinitialisation de la barre de progression
        setCompleted(0);
    };

  const handleMouseEnter = () => {
    // setIsHovered(true); il ne sert pas à grand chose
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    // setIsHovered(false); il ne sert pas à grand chose
    setIsPaused(false);
  };

  //pour gérer la pause sur la barre de progression
  useEffect(() => {
      let intervalCompleted // initialisation pour le sortir qu'il soit accessible partout dans le useEffect
      if (!isPaused) {
          intervalCompleted = setInterval(() => {
              setCompleted((prevValue) => (prevValue < 100 ? prevValue + 1 : 100));
          }, 100); // Incrémente la barre de progression toutes les 50ms
      }
      return () => clearInterval(intervalCompleted)
  }, [isPaused])

    //pour gérer la réinitialisation automatique de la barre de progression à part
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
            <button className='button-right' onClick={() => changeImage('next')}><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </div>

    )
}