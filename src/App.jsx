import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const about_content = `I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
  I try to keep up with security and best practices, and am always looking for new things to learn.`;


  const interest_content = `Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.`;

  return (
    <div className="business-card">
      <Header/>
      <div className='main-content'>
        <Content  title={"About"} content={about_content}/>
        <Content  title={"Interests"} content={interest_content}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
