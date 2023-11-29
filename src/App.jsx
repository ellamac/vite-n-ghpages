import { useState } from 'react';
import './App.css'

function App() {
  const [howManySmileys, setHowManySmileys] = useState(0);
  const smiley = '😃';
  return (
    <main>
     <h1>this is my vite + react app deployed to github pages 😃</h1>
     <button onClick={() => setHowManySmileys(prev => prev + 1)}>😃<sup>😃</sup></button>
     <h2>{smiley.repeat(Math.pow(howManySmileys,howManySmileys))}</h2>
    </main>
  )
}

export default App
