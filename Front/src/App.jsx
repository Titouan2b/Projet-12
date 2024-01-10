import './App.scss'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
