import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Presentation from './components/Presentation/Presentation'
import Projets from './components/Projets/Projets'
import Competence from './components/Competence/Competence.jsx'
import { ScrollContainer } from 'react-scroll-motion'

function App() {


  return (
    <BrowserRouter>
    <div className='app'>
      <ScrollContainer>
        <Header/>
        
          <div className='absolute'>
            <Presentation/>
            <Competence/>
            <Projets/>
          </div>
        
        <Footer/>
      </ScrollContainer>
    </div>
    </BrowserRouter>
  )
}

export default App
