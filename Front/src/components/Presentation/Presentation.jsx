import React from 'react'
import "./presentation.scss"
import { Animator, Fade, FadeOut, MoveIn, batch } from 'react-scroll-motion'

export default function Presentation() {
  return (
    
      
        <Animator animation={batch(Fade(0, 1), FadeOut(1, 1), MoveIn(0, 50))}>
          <div className='presentation'>
              
                
                <div className='window'>
                <h2>A propos</h2>
                  <p>Provenant du milieu informatique, j'ai toujours admiré les personnes qui travaille dans le code car de loin j'avais cette impression que c'étais compliqué.
                      Puis en 2020, sortant d'un Bac STMG, je décide de faire un DUT MMI (Métier du Multimédia et de l'Internet), où j'ai appris plusieurs langage de programmation dont le HTML & CSS qui 
                      m'ont énormément plu pour leur faciliter d'apprentissage. En voulant apprendre le Javascript j'ai trouvé la formation "Intégrateur Web" où il y avait tous ce qu'il me plaîsait.
                  </p>
                </div>
          </div>
        </Animator>

    
  )
}
