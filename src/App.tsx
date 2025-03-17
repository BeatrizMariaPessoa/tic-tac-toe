// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {
  //   const [count, setCount] = useState(0)
  
  //   return (
    //     <>
    //       <div>
    //         <a href="https://vite.dev" target="_blank">
    //           <img src={viteLogo} className="logo" alt="Vite logo" />
    //         </a>
    //         <a href="https://react.dev" target="_blank">
    //           <img src={reactLogo} className="logo react" alt="React logo" />
    //         </a>
    //       </div>
    //       <h1>Vite + React</h1>
    //       <div className="card">
    //         <button onClick={() => setCount((count) => count + 1)}>
    //           count is {count}
    //         </button>
    //         <p>
    //           Edit <code>src/App.tsx</code> and save to test HMR
    //         </p>
    //       </div>
    //       <p className="read-the-docs">
    //         Click on the Vite and React logos to learn more
    //       </p>
    //     </>
    //   )
    // }
    
    // export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Titulo from "./Titulo";
import NovaPagina from './NovaPagina';

function Home() {
  return (
    <div>
      <Titulo />
      <Titulo cor="purple" />
      <Titulo cor="pink" />
    </div>
  );
}

function Navigation() {
  const location = useLocation();
  if (location.pathname === "/nova-pagina") {
    return null;
  }
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nova-pagina">Nova Página</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nova-pagina" element={<NovaPagina />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;