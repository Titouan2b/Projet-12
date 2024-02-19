import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import gif1 from "../../assets/gif/Sophie Bluel - Architecte dintérieur.gif"
import "./tabs.scss"


export default function () {
    const [contenuActive, setContenuActive] = useState('Projet1')
    const tabs = {
        Projet1: (
          <div className='tab-content'>
            <h4>Créez une page web dynamique avec JavaScript</h4>
            <div>
                <p>Tout d'abord j'ai apprécié ce projet car c'étais une des raison du pourquoi j'ai choisis cette formation.
                C'est un projet qui est réaliser avec HTML & CSS et Javascript.
                Je devais faire une page admin, un trieur et créer une modale pour ajouter ou supprimer un contenu.<br></br><br/>
                Vous pouvez retrouver le code du projet  <Link to="https://github.com/Titouan2b/Projet-6">ici</Link>.</p>
                <img src={gif1} alt="gif site internet projet 1" />
            </div>
          </div>
        ),
        Projet2: (
          <div className='tab-content'>
              <h4>Créez une application web de location immobilière avec React</h4>
              <div>
                <p>
                  J'ai pas vraiment entendu parler de React ou du moins pas au point qu'il m'intéresse,
                  et aujourd'hui c'est un des codes que j'apprécie le plus. <br/>
                  Sur ce projet, je devais construire une page d'accueil, une page "A propos", une page "Erreur 404" et une page
                  "Logement" pour chaque logement et a propos plusieur collapse et le tout sur desktop et mobile.<br></br><br/>
                  Vous pouvez retrouver le code du projet  <Link to="https://github.com/Titouan2b/Projet-6">ici</Link>.
                </p>
                <img src="" alt="gif site internet projet 2" />
              </div>
          </div>
        ),
        Projet3: (
          <div className='tab-content'>
              <h4>Optimisez le référencement d'un site de photographe</h4>
              <div>
                <p>
                  L'optimisation est extrêmement important pour des fins commercials (Amazon, Cdiscount) qui leur feront perdre des utilisateurs si c'est mal optimiser.
                  Grâce a ce projet, j'ai pu apprendre énormémnent sur l'optimisation comme par exemple la hiérarchisation des titres ou la taille des images.<br></br><br/>
                  Vous pouvez retrouver le code du projet  <Link to="https://github.com/Titouan2b/Projet-6">ici</Link>.
                </p>
                <img src="" alt="gif site internet projet 3" />
              </div>
          </div>
        ),
        Projet4: (
          <div className='tab-content'>
            <h4>Injustice</h4>
            <div>
              <p>
                C'est un site internet créer pour un projet de jeu vidéo lorsque j'étais en MMI.
                Il a été coder en HTML & CSS et Javascript, j'ai aussi des librairies comme OwlCarousel
                qui me permettais de faire des carousels dynamique, facilement et qui me permettais de mettre des vidéos dans un slider.
                J'ai aussi utiliser typed.js, la même animation qu'il y a actuellement sur le header.<br></br><br/>
                Vous pouvez retrouver le code du projet  <Link to="https://files.000webhost.com">ici</Link>.<br/>
                <Link to="https://projet-injustice.000webhostapp.com">Ici</Link> Vous pouvez retrouver le lien vers le site internet
              </p>
              <img src="" alt="gif site internet projet 4" />
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
                  {tabs[contenuActive]}

    </div>
  )
}
