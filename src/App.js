import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

/* 
<div className="App">
  <header className="App-header">
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
  </header>
</div>
*/