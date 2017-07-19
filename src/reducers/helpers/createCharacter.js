import charactersJSON from '../../data/characters.json'

function createCharacter(id) {
  let character = charactersJSON.find( c => c.id === id )
  return character
}

export default createCharacter