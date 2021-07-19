import React from 'react';
import { GlobalStyle } from './GlobalStyle';
// Components
import Header from './components/header';
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
