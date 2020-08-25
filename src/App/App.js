import React, { Component } from 'react'
import Home from '../Home/Home'
import Creatures from '../Creatures/Creatures'
import CreatureDetails from '../Creatures/CreatureDetails'
import './App.css'
import puppies from '../data/puppy-data.js'
import sharks from '../data/shark-data.js'

import { Route, NavLink, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/" className="nav">Home</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
				<Route exact path="/" render={() => <Home />} />
				<Route exact path="/puppies/:id" render={({ match }) => {
				// find the puppy that matches the id passed in from match
				// pass that puppy into the creature details component
					const puppy = puppies.find(puppy => puppy.id === +match.params.id) // the + is parsing
					return <CreatureDetails {...puppy} />}
				}/>
				<Route exact path="/puppies" render={() => <Creatures name="Puppies" data={puppies} />} />
				<Route exact path="/sharks" render={() => <Creatures name="Sharks" data={sharks} />} />
      </main>
    )
  }
}
