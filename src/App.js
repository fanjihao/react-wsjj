import React from 'react'
import './App.css'
import IndexHome from './components/IndexHome'
import { Redirect } from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      <Redirect from="/" exact to="/Home" />
      <IndexHome {...props}/>
    </div>
  );
}

export default App;
