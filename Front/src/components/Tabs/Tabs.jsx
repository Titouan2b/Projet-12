import React, { useState } from 'react'
import Tab from '../Tab/Tab'
import gif from "../../assets/gif/Sophie Bluel - Architecte dintérieur.gif"
import "./tabs.scss"


export default function () {
    const [contenuActive, setContenuActive] = useState('projet1')
    
    const switchTabActive = (switchContenuActive) => {
        setContenuActive(switchContenuActive)
    }

  return (
    <div className='space-around'>

            
            <Tab  label="Projet 1" Onclick={() => switchTabActive('projet1')}>
                {contenuActive === 'projet1' && 
                    <div>
                        <h4>Créez une page web dynamique avec JavaScript</h4>
                        <div>
                            <p>Tout d'abord j'ai apprécié ce projet car c'étais une des raison du pourquoi j'ai choisis cette formation.
                            C'est un projet qui est réaliser avec HTML & CSS et Javascript.
                            Je devais faire une page admin, un trieur et créer une modale pour ajouter ou supprimer un contenu.
                            vous pouvez retrouver le code du projet <a to="https://github.com/Titouan2b/Projet-6">ici</a>.</p>
                            <img src={gif} alt="gif site internet projet 1" />
                        </div>
                    </div>
                }
            </Tab>


            
            <Tab label="Projet 2" Onclick={() => switchTabActive('projet2')}>
            {contenuActive === 'projet2' && 
                <div>
                    <h4>Créez une application web de location immobilière avec React</h4>
                </div>
            }
              </Tab>
            


          
            <Tab label="Projet 3" Onclick={() => switchTabActive('projet3')}>
            {contenuActive === 'projet3' && 
                <div>
                    <h4>Optimisez le référencement d'un site de photographe</h4>
                </div>
            }
              </Tab>



          
            <Tab label="Projet 4" Onclick={() => switchTabActive('projet4')}>
            {contenuActive === 'projet4' && 
            <div>
              <h4>Créez une page web dynamique avec JavaScript</h4>
            </div>
            }
              </Tab>


    </div>
  )
}
