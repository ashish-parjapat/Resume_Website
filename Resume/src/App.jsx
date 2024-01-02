import './App.css'
import Appbar from './Appbar'
import Intro from './Intro'
import Projects from './Projects'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import About from "./About"
import Front from './Front'

function App() {
  return (
    <>
      <Router>
      <Routes>
  <Route path="/" element={<Front/>}/>
 
   
      <Route path="/about" element={<About/>}/>
    </Routes>
   </Router>
   
    </>
  )
}

export default App