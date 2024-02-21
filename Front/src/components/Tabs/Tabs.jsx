import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import gif1 from "../../assets/gif/Sophie Bluel - Architecte dintérieur.gif"
import gif2 from "../../assets/gif/Kasa - Opera 2024-02-20 04-06-00.gif"
import gif3 from "../../assets/gif/Accueil _ Nina Carducci photographe professionnel - Opera 2024-02-20 04-09-42.gif"
import gif4 from "../../assets/gif/Injustice - Opera 2024-02-19 17-53-28.gif"

import "./tabs.scss"


export default function () {
    const [contenuActive, setContenuActive] = useState('Projet_Javascript')
    const tabs = {
        Projet_Javascript: (
          <div className='tab-content'>
            <h4>Créez une page web dynamique avec JavaScript</h4>
            <div>
                <p>Tout d'abord j'ai apprécié ce projet car c'était une des raisons du pourquoi j'ai choisi cette formation.
                C'est un projet qui est réalisé avec HTML & CSS et Javascript.
                Je devais faire une page admin, un trieur et créer une modale pour ajouter ou supprimer un contenu.<br></br><br/>
                <Link className='lien' to="https://github.com/Titouan2b/Projet-6">Appuyer pour avoir le code du projet</Link></p>
                <img src={gif1} alt="gif site internet projet 1" />
            </div>
          </div>
        ),
        Projet_React: (
          <div className='tab-content'>
              <h4>Créez une application web de location immobilière avec React</h4>
              <div>
                <p>
                  Je n'ai pas vraiment entendu parler de React ou du moins pas au point qu'il m'intéresse,
                  et aujourd'hui c'est un des codes que j'apprécie le plus. <br/>
                  Sur ce projet, je devais construire une page d'accueil, une page "A propos", une page "Erreur 404" et une page
                  "Logement" pour chaque logement et à propos plusieurs collapses et le tout sur desktop et mobile.<br></br><br/>
                  <Link className='lien' to="https://github.com/Titouan2b/Projet-8">Appuyer pour avoir le code du projet</Link>
                </p>
                <img src={gif2} alt="gif site internet projet 2" />
              </div>
          </div>
        ),
        Projet_Optimisation: (
          <div className='tab-content'>
              <h4>Optimisez le référencement d'un site de photographe</h4>
              <div>
                <p>
                  L'optimisation est extrêmement importante pour des fins commerciaux (Amazon, Cdiscount) qui leur feront perdre des utilisateurs si c'est mal optimiser.
                  Grâce à ce projet, j'ai pu apprendre énormément sur l'optimisation comme par exemple la hiérarchisation des titres ou la taille des images.<br></br><br/>
                  <Link className='lien' to="https://github.com/Titouan2b/Projet-9">Appuyer pour avoir le code du projet</Link>
                </p>
                <img src={gif3} alt="gif site internet projet 3" />
              </div>
          </div>
        ),
        Projet_MMI: (
          <div className='tab-content'>
            <h4>Injustice</h4>
            <div>
              <p>
                C'est un site internet créer pour un projet de jeu vidéo lorsque j'étais en MMI.
                Il a été coder en HTML & CSS et Javascript, j'ai aussi des librairies comme Owl Carousel
                qui me permettait de faire des carousels dynamiques, facilement et qui me permettais de mettre des vidéos dans un slider.
                J'ai aussi utilisé typed.js, la même animation qu'il y a actuellement sur le header.<br></br><br/>
                <Link className='lien' to="https://files.000webhost.com">Appuyer pour avoir le code du projet</Link><br/><br></br>
                <Link className='lien' to="https://projet-injustice.000webhostapp.com">Appuyer pour avoir le site web du projet</Link>
              </p>
              <img src={gif4} alt="gif site internet projet 4" />
            </div>
          </div>
        ),
    }
    
    const switchTabActive = (switchContenuActive) => {
        setContenuActive(switchContenuActive)
    }

  return (
    <div className='space-around'>
          <div className='nav'>
            {Object.keys(tabs).map((tab) => (
                      <button
                          key={tab}
                          className={`tab ${contenuActive === tab ? 'active' : ''}`}
                          onClick={() => switchTabActive(tab)}
                      >
                          {tab}
                      </button>
                  ))}
          </div>
          <div className='bar'>
          </div>
                  {tabs[contenuActive]}

    </div>
  )
}
