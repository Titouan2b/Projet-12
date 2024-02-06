import React from 'react'
import "./footer.scss"

export default function Footer() {
  return (
    <footer>
      <p>Mon profil vous intéresse ?</p>
      <form action="/">
        <label htmlFor="email">Votre Email :</label>
        <input type="email" />
        <label htmlFor="message">Message : </label>
        <textarea className="message" name="message" id="msg" cols="30" rows="10"></textarea>
      </form>
    </footer>
  )
}
{/* <i className="fa-solid fa-phone"></i>
      <i className="fa-solid fa-envelope"></i>
      <i className="fa-brands fa-linkedin"></i> */}