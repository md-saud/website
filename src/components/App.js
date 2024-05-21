import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
