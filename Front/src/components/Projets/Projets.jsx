import React, { useEffect, useState } from 'react'
import './projets.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Projet1 from '../../Pages/Projet_1/Projet_1'
import Projet2 from '../../Pages/Projet_2/Projet_2'
import Projet3 from '../../Pages/Projet_3/Projet_3'
import Projet4 from '../../Pages/Projet_4/Projet_4'
import { Animator, Fade, FadeOut, MoveIn, batch } from 'react-scroll-motion'
import Tab from '../Tab/Tab'
import gif from "../../assets/gif/Sophie Bluel - Architecte dintérieur.gif"



export default function Projets() {






  return (
    <Animator animation={batch(Fade(0, 1), FadeOut(1, 1), MoveIn(0, 50))}>
      <div className='projets'>
        <div className='space-around'>
          <div className='nav'>
              <Tab  label="Projet 1" to="/">
              <h4>Créez une page web dynamique avec JavaScript</h4>
                <div>
                  
                  <p>Tout d'abord j'ai apprécié ce projet car c'étais une des raison du pourquoi j'ai choisis cette formation.
                    C'est un projet qui est réaliser avec HTML & CSS et Javascript.
                    Je devais faire une page admin, un trieur et créer une modale pour ajouter ou supprimer un contenu.
                  
                  vous pouvez retrouver le code du projet <a to="https://github.com/Titouan2b/Projet-6">ici</a>.</p>
                  <img src={gif} alt="gif site internet projet 1" />
                </div>
              </Tab>
          </div>
          <div className='nav'>

            <Tab label="Projet 2" to="/">
            <h4>Créez une application web de location immobilière avec React</h4>
                <div>
                  
                </div>
              </Tab>
          </div>
          <div className='nav'>

            <Tab label="Projet 3" to="/">
            <h4>Optimisez le référencement d'un site de photographe</h4>
                <div>
                  
                </div>
              </Tab>
          </div>
          <div className='nav'>

            <Tab label="Projet 4" to="/">
              <h4>Créez une page web dynamique avec JavaScript</h4>
                <div>
                </div>
              </Tab>
          </div>
        </div>
      </div>
    </Animator>
  )
}
