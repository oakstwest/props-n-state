// import React. This allows us to use JSX (what looks like HTML)
// {Component} allows us to make use of Component when creating our class App
import React, { Component } from 'react';
import './App.css';

//imported components
import Header from './Components/Header'
import Color from './Components/Color'
import SelectedColor from './Components/SelectedColor'

class App extends Component {
  //constructors are where we can set our base information, such as state, for our class
  constructor(props) {
    super(props)
    //even though props won't be used it is still a good habit to get into to pass them in

    //setting our initial state
    this.state = {
      name: 'Bryan'
    }
    //binding our methods we created below
    this.handleUpdateName = this.handleUpdateName.bind(this)
    this.handleUpdateColor = this.handleUpdateColor.bind(this)
  }
  handleUpdateName(e) {
    this.setState({ name: e.target.value })
  }
  handleUpdateColor(data) {
    this.setState({ selectedColor: data })
  }
  render() {
    return (
      <div className="App">
        {/*Header component with name and method props. name prop gets its value off of state
          method prop comes from the handleUpdateName method above */}
        <Header name={this.state.name}
          method={this.handleUpdateName} />
        <div className="color-container">
          {/*Color component with bgColor and method props. bcColor prop gets its value from a typed string
          method prop comes from the handleUpdateColor method above */}
          <Color bgColor='thistle'
            method={this.handleUpdateColor} />
          <Color bgColor='crimson'
            method={this.handleUpdateColor} />
          <Color bgColor='dimgray'
            method={this.handleUpdateColor} />
        </div>
        {/*Color component with bgColor prop. bcColor prop gets its value from state */}
        <SelectedColor bgColor={this.state.selectedColor} />
      </div>
    );
  }
}

export default App;
