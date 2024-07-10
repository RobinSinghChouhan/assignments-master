import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil'
import { Profile } from './components/Profile'
import { BackgroundChanger } from './components/BackgroundChanger'

function App() {
  return <div>
    <RecoilRoot>
    {/* <Profile/> */}
    <BackgroundChanger/>
    </RecoilRoot>
    </div>
    
}

export default App
