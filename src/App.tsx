import { NavigationMenu } from './components/NavigationMenu'
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'

export default function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>

      <NavigationMenu />
    </div>
  )
}