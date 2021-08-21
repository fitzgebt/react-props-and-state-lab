import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petArray = this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
    ))
      return <div className="ui cards">{petArray}</div>
  }
}


export default PetBrowser
