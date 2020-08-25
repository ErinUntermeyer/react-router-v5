import React, { Component } from 'react'
import Home from '../Home/Home'
import Creatures from '../Creatures/Creatures'
import CreatureDetails from '../Creatures/CreatureDetails'
import './App.css'
import puppies from '../data/puppy-data.js'
import sharks from '../data/shark-data.js'
import dolphins from '../data/dolphin-data.js'
import unicorns from '../data/unicorn-data.js'

import { Route, NavLink, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/" className="nav">Home</NavLink>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
          <NavLink to="/dolphins" className="nav">Dolphins</NavLink>
          <NavLink to="/unicorns" className="nav">Unicorns</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
				<Route exact path="/" render={() => <Home />} />
				<Route exact path="/puppies" render={() => <Creatures name="Puppies" data={puppies} />} />
				<Route exact path="/sharks" render={() => <Creatures name="Sharks" data={sharks} />} />
				<Route exact path="/dolphins" render={() => <Creatures name="Dolphins" data={dolphins} />} />
				<Route exact path="/unicorns" render={() => <Creatures name="Unicorns" data={unicorns} />} />
				<Route exact path="/:animals/:id" render={({ match }) => {
					// find the puppy that matches the id passed in from match
					// pass that puppy into the creature details component
					const { animals, id } = match.params
					let data
					if (animals === 'puppies') {
						data = puppies
					} else if (animals === 'sharks') {
						data = sharks
					} else if (animals === 'dolphins') {
						data = dolphins
					} else if (animals === 'unicorns') {
						data = unicorns
					}
					const creatureToRender = data.find(creature => creature.id === +id) // the + is parsing
					return <CreatureDetails {...creatureToRender} />
				}
				} />
      </main>
    )
  }
}
