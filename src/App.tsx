import Menu from './components/Menu'
import Character from './components/Character'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <>
      <Menu />

      <main className='conteiner'>
        <Character name='Karirin' image='../public/characters/kyoko.jpg' />
        <Character name='Godai' image='../public/characters/godai.jpg' />
        <Character name='Akemi' image='../public/characters/akemi.jpg' />
        <Character name='Yotsuya' image='../public/characters/yotsuya.jpg' />
        <Character name='Ichinose' image='../public/characters/Ichinose.jpeg' />
        <Character name='Mitaka' image='../public/characters/mitaka.jpg' />
        <Character name='Kozue' image='../public/characters/kozue.jpeg' />
        <Character name='Yagami' image='../public/characters/yagami.jpg' />
        <Character name='Kujou' image='../public/characters/kujou.jpg' />
      </main>

      <Footer />
    </>
   )
}

export default App
