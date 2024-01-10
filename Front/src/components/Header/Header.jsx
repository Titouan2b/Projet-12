import React from 'react'
import TypeIt from 'typeit-react'

export default function Header() {
  return (
    <div>
        <TypeIt
        getBeforeInit={(instance) => {
            instance.type("Tiotua".pause(750).delete(4).pause(500).type("touan Belliadr").pause(750).delete(2).pause(500).type("rd"))
            return instance
        }}
        />
    </div>
  )
}
