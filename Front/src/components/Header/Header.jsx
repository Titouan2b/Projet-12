import React from 'react'
import TypeIt from 'typeit-react'
import "./header.scss"

export default function Header() {
  return (
    <header>
        <TypeIt
        className="Name"
        element={"h1"}
        getBeforeInit={(Name) => {

            Name.type("Titouan Belliard").pause(1500).delete(16).type("Intégrateur Web").pause(1500)

            return Name 

        }}
        
        options={{
          speed: 100,
          waitUntilVisible: true,
          loop: true
        }}
        />
</header>
  )
}
