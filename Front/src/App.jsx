import './App.scss'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Presentation from './components/Presentation/Presentation'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Presentation/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
