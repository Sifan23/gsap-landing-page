import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <h1 className='flex-center h-[100vh]'>Hello, GSAP</h1>
  )
}

export default App