import React from 'react'
import { Link } from 'react-router-dom'
import "./projet_1.scss"
import gif from "../../assets/gif/Sophie Bluel - Architecte dintérieur.gif"

export default function Projet_1() {
  return (
    <div className='project'>
      <h4>Créez une page web dynamique avec JavaScript</h4>
      <div className='desc-project'>
        
        <p>Tout d'abord j'ai apprécié ce projet car c'étais une des raison du pourquoi j'ai choisis cette formation.
        C'est un projet qui est réaliser avec HTML & CSS et Javascript.
          Je devais faire une page admin, un trieur et créer une modale pour ajouter ou supprimer un contenu.
        
        vous pouvez retrouver le code du projet <Link to="https://github.com/Titouan2b/Projet-6">ici</Link>.</p>
        <img src={gif} alt="gif site internet projet 1" />
      </div>
      
     
    </div>
  )
}
