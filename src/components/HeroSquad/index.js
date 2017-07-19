import React, { Component } from 'react'

class HeroSquad extends Component {
  render() {
    return(
      <div>
        <h4>Your Hero Squad</h4>
        <ul>
          <li>
            <div>
              Hero name
              <button>+</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default HeroSquad