import './App.css';
import Home from './home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Match from './match'
import Meeting from './meeting'


function App() {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route index exact path="/meeting"  element={<Meeting />} />
          <Route index exact path="/match" element={<Match />} />
      </Routes>
    </Router>
  );
}

export default App;
