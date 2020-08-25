import React from 'react'
import './image-display.css'

const Creatures = ({ data, name }) => {
  const creatureImages = data.map(creature => {
    const { id, image } = creature
    return <img src={image} key={id} id={id} className="app-img"/>
	})
	
  return (
    <>
      <h1>{name}!</h1>
      {creatureImages}
    </>
  )

}

export default Creatures;
