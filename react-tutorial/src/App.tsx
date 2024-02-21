/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Tweet } from "./componentes/Tweet"
import './App.css'

function App() {
// Função para atualizar a listagem de tweets  <==>Lista de Twwets
const [tweets, setTweets] = useState<string[]>([
  'Tweet 1',
  'Tweet 2',
  'Tweet 3'
]);

function createTweet()
{
  //...tweets ==> Pega a lista atual e adiciona um objeto
  setTweets([...tweets, 'Tweet 5'])
}


  return (
    <div>
      {tweets.map(tweet =>  {
        return <Tweet text={tweet}/>
      })}

      {/* CSS IN JS: Escrever CSS no JavaScript */}
      <button
        style={{
          backgroundColor: '#8257e6',
          padding: '6px 12px',
          border: 0,
          color: '#FFF'
        }}

       onClick={createTweet}
      >Adicionar Tweet
      </button>
    </div>
  );
}

export default App
