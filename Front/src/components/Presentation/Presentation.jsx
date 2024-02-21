import React from 'react'
import "./presentation.scss"
import { Animator, Fade, FadeOut, MoveIn, batch } from 'react-scroll-motion'

export default function Presentation() {
  return (
    <div>
          <Animator className='desktop' animation={batch(Fade(0, 1), FadeOut(1, 1), MoveIn(0, 50))}>
            <div className='presentation'>
                
                  
                  <div className='window'>
                  <h2>A propos</h2>
                  <div className='bar'>
                  </div>
                    <p>Provenant du milieu informatique, j'ai toujours admiré les personnes qui travaillent dans le code car de loin j'avais cette impression que c'était compliqué.
                        Puis en 2020, sortant d'un Bac STMG, je décide de faire un DUT MMI (Métier du Multimédia et de l'Internet), où j'ai appris plusieurs langages de programmation dont le HTML & CSS qui 
                        m'ont énormément plu pour leur faciliter d'apprentissage. En voulant apprendre le Javascript j'ai trouvé la formation "Intégrateur Web" où il y avait tout ce qu'il me plaisait.
                    </p>
                  </div>
            </div>
          </Animator>
          
          <div className='presentation tel'>
                  <div className='window'>
                  <h2>A propos</h2>
                  <div className='bar'>
                  </div>
                    <p>Provenant du milieu informatique, j'ai toujours admiré les personnes qui travaillent dans le code car de loin j'avais cette impression que c'était compliqué.
                        Puis en 2020, sortant d'un Bac STMG, je décide de faire un DUT MMI (Métier du Multimédia et de l'Internet), où j'ai appris plusieurs langages de programmation dont le HTML & CSS qui 
                        m'ont énormément plu pour leur faciliter d'apprentissage. En voulant apprendre le Javascript j'ai trouvé la formation "Intégrateur Web" où il y avait tout ce qu'il me plaisait.
                    </p>
                  </div>
            </div>

      
          
      </div>
    
  )
}
