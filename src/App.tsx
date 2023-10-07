import Menu from './components/Menu'
import Character from './components/Character'

import './App.css'

function App() {

  return (
    <>
      <Menu />
      <main className='conteiner'>
        <Character name='Karirin' image='/characters/kyoko.jpg' />
        <Character name='Godai' image='/characters/godai.jpg' />
        <Character name='Akemi' image='/characters/akemi.jpg' />
        <Character name='Yotsuya' image='/characters/yotsuya.jpg' />
        <Character name='Ichinose' image='/characters/Ichinose.jpeg' />
        <Character name='Mitaka' image='/characters/mitaka.jpg' />
        <Character name='Kozue' image='/characters/kozue.jpeg' />
        <Character name='Yagami' image='/characters/yagami.jpg' />
        <Character name='Kujou' image='/characters/kujou.jpg' />
      </main>
    </>
   )
}

export default App
