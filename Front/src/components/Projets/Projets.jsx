import React, { useEffect, useState } from 'react'
import './projets.scss'
import { Animator, Fade, FadeOut, MoveIn, batch } from 'react-scroll-motion'
import Tabs from '../Tabs/Tabs'




export default function Projets() {






  return (
    <Animator animation={batch(Fade(0, 1), FadeOut(1, 1), MoveIn(0, 50))}>
      <div className='projets'>
        <div className='space-around'>
         <Tabs />
        </div>
      </div>
    </Animator>
  )
}
