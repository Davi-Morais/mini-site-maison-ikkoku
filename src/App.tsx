import Menu from './components/Menu'
import Character from './components/Character'
import Footer from './components/Footer'

import karirin from '../public/characters/kyoko.jpg'
import godai from '../public/characters/godai.jpg'
import akemi from '../public/characters/akemi.jpg'
import yotsuya from '../public/characters/yotsuya.jpg'
import ichinose from '../public/characters/Ichinose.jpeg'
import mitaka from '../public/characters/mitaka.jpg'
import kozue from '../public/characters/kozue.jpeg'
import yagami from '../public/characters/yagami.jpg'
import kujou from '../public/characters/kujou.jpg'

import './App.css'

function App() {

  return (
    <>
      <Menu />

      <main className='conteiner'>
        <Character name='Kyoko Otonashi' image={karirin} />
        <Character name='Yusaku Godai' image={godai} />
        <Character name='Akemi Roppongi' image={akemi} />
        <Character name='Yotsuya' image={yotsuya} />
        <Character name='Hanae Ichinose' image={ichinose} />
        <Character name='Shun Mitaka' image={mitaka} />
        <Character name='Kozue Nanao' image={kozue} />
        <Character name='Ibuki Yagami' image={yagami} />
        <Character name='Asuna Kujou' image={kujou} />
      </main>

      <Footer />
    </>
   )
}

export default App
