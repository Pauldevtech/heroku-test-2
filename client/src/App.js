import { useEffect, useState } from 'react';
import './App.css';

function App() {

const [info, setInfo] = useState('')


useEffect(()=>{
  fetch('/info')
  .then(res => res.json())
  .then(data => setInfo(data))
})



  return (
    <div className="App">
      <h1>{info}</h1>
    </div>
  );
}

export default App;
