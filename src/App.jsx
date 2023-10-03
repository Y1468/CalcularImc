import React,{useState} from 'react'
import './App.css'
import Peso from './components/peso'
import Altura from './components/altura'
import Buton from './components/buton'
import Res from './components/res'
import Tabelaimc from './components/tabelaimc'



export default function App() {
  const[peso,setPeso]=useState(0)
  const[altura,setAltura]=useState(0)
  const[resultado,setResultado]=useState(0)

  
  return (
    <div>
      <Peso p={peso} sp={setPeso}/>
      <Altura a={altura} sa={setAltura}/>
      <Buton p={peso} a={altura} setR={setResultado}/>
      <Res r={resultado}/>
      <Tabelaimc/>
    </div>
  )
}
