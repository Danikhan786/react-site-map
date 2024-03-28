// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Sitemap from './Sitemap';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Route */}
        <Route path="/sitemap.xml" element={<Sitemap />} /> {/* Use 'element' prop to render component */}
        {/* Other routes */}
        <Route path="/" element={<div>Your other components</div>} /> {/* Use 'element' prop to render component */}
      </Routes>
    </Router>
  );
}

export default App;
