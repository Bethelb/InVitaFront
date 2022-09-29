import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Routes, Route, BrowserRouter, Outlet, Link } from "react-router-dom";
import Home from './components/Home.js'
import CreateTeam from './components/CreateTeam'
import ViewTeam from './components/ViewTeam'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view">View</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="view" element={<ViewTeam/>} />
            <Route path="create" element={<CreateTeam />} />
        </Routes>
      
      
    </div>
    </BrowserRouter>
      
  );
}

export default App;
