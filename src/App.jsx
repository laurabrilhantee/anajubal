import { useState } from 'react'
import './App.css'

export default function App() {

  const CLASSES = [
    { nome: "Mago", emoji: "💪🏼"},
    { nome: "Guerreiro", emoji: "💪🏼"},
    { nome: "Arqueiro", emoji: "💪🏼"},
    { nome: "Curandeiro", emoji: "💪🏼"},
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [hp, setHp] = useState(100); //número
  const [vivo, setVivo] = useState(true); //boolean
  const [classe, setClasse] = useState(CLASSES[0]); //objeto

  const receberDano = () => {
    const novoHp = Math.max(0, hp-10);
    setHp(novoHp);
    setVivo(novoHp > 0);
  }

  const curar = () => {
    setHp(100);
    setVivo(true);
  }

  const pct = hp/100;
  const corBarra = pct > 0.5 ? "#5DCAA5" : pct > 0.25 ? "#EF9F27" : "#E24B4A";
  
  return (
    <>
      <main>
        <section>
          <h1> SmartFit </h1>
          <div className="thumb">
            {vivo ? classe.emoji : "💪🏼"}
          </div>
          <input 
            type="text" 
            className='nome' 
            placeholder='Nome dos Planos'
            value={nome}
            onChange={(e) => setNome(e.target.value)}  
          />

          <div className="status">
            <p>Status</p>
            <p>Vivo (boolean)</p>
            <span>{vivo ? "VIVO" : "MORTO"}</span>
            <span>{vivo ? "true" : "false"}</span>
          </div>

          <p id='pontosVida'>Pontos de vida (HP) {hp}/100</p>
          <div className="barra" style={{background: corBarra}}>
          </div>

          <button 
            className='BTcura'
            onClick={receberDano}  
            disabled={!vivo}
          >Receber Dano</button>
          
          <button 
            className='BTcura'
            onClick={curar} 
          >Curar</button>
          
          <div className="classes">
            <button onClick={() => setClasse(CLASSES[0])}> DIARIA</button>
            <button onClick={() => setClasse(CLASSES[1])}> PLANO BLACK</button>
            <button onClick={() => setClasse(CLASSES[2])}> PLANO SMART</button>
            <button onClick={() => setClasse(CLASSES[3])}> PLANO FIT</button>
          </div>

        </section>
      </main>
    </>
  )
}

