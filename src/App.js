import React from 'react';
import { Route,Routes, Router } from 'react-router-dom';

import Airline from './app/Airline/Airline';
import Airlines from './app/Airlines/Airlines';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/airline/:slug" element={<Airline />}/>
        <Route exact path="/" element={<Airlines />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
