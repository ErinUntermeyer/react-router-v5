import React, { Component } from 'react'
import './App.css'
import puppies from '../data/puppy-data.js'
import sharks from '../data/shark-data.js'
import Creatures from '../Creatures/Creatures'
import Home from '../Home/Home'

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <a href="/puppies" className="nav">Puppies</a>
          <a href="/sharks" className="nav">Sharks</a>
        </nav>
        <h1>Puppies or Sharks?</h1>
      </main>
    );
  }
}
