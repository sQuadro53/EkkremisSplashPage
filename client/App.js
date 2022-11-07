import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Docs from './components/Docs';
import NotFound from './components/NotFound';

function App() {
  return (

    <Router>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;