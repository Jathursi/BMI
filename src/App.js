import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Calculate from './Calculate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculate/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
