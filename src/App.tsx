import { NavigationMenu } from './components/NavigationMenu'
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

export default function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <NavigationMenu />
    </div>
  )
}