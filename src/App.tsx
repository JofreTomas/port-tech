import { Center } from '@chakra-ui/react'
import './App.css'
import {Navbar } from './components/Nav'
import Main from './components/Main'

function App() {
  return (
    <>
      <Navbar/>
      <Center>
        <Main/>
      </Center>
    </>

  )
}

export default App
