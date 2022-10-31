import {useState } from 'react'
import './App.css'

function App() {
  const [mlCopo, setMlCopo] = useState(0)
  const [copoAgua, setCopoAgua] = useState(0)
  const [calcAgua, setCalcAgua] = useState(0)
  const [mensagem, setMensagem] = useState("")

  const metaDiaria = () => {
    if (calcAgua >= 2000) {
      setMensagem(`Parabéns você atingiu sua meta diaria`)
    } else {
      setMensagem(`Você ainda não atingiu sua meta diaria`)
    }
  }

  const AddAgua = () => {
    setCopoAgua(copoAgua + 1)
  }

  const Reset = () => {
    setCopoAgua(0)
    setMlCopo(0)
    setCalcAgua(0)
    setMensagem(0)
  }

  const calculoAgua = () => {
    setCalcAgua(copoAgua * mlCopo)
  }

  return (
    <>
      <h1>Contador de Água</h1>
      <h2>Quantidade de copos: {copoAgua}</h2>
      <button onClick={AddAgua}>+1 copo</button>

      <h3>Insira quantos ml tem no copo: {mlCopo}</h3>
      <input type="text" value={mlCopo} onChange={e => setMlCopo(e.target.value)} />  

      <h2>Quantidade de água bebida: {calcAgua} ml</h2>
      <button onClick={calculoAgua}>Calcular</button>

      <button onClick={Reset}>Resetar contagem</button> 

      <h2>Meta de ingestão diária de água: 2000ml</h2>
      <button onClick={metaDiaria}>Meta diaria</button>
      <h3>{mensagem}</h3>     
      
    </>
  )
}

export default App
