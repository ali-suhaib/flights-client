import React from 'react';
import { Route,Routes, Router } from 'react-router-dom';

import Airline from 'app/main/Airline/Airline';
import Airlines from 'app/main/Airlines/Airlines';

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
