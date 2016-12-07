import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        Hi There! seems react is loaded.
      </div>
    )
  }
};

render(<App />, document.getElementById('app'))
