import React, { Component } from 'react'
import CharacterList from './CharacterList'
import HeroSquad from './HeroSquad'

class App extends Component {
  render() {
    return  (
      <div>
        <h1>Super Squad</h1>
        <CharacterList />
        <HeroSquad />
      </div>
    )
  }
}

export default App