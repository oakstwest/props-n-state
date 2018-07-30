import React, { Component } from 'react'

class SelectedColor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'aquamarine'
    }
  }
  //componentWillReceiveProps is what is known as a lifecyle method. This method listens for new props to be passed to it and when it does, it will perform some action. In this case, it sets state
  componentWillReceiveProps(props) {
    console.log('I received props')
    this.setState({ color: props.bgColor })
  }
  //componentDidMount is another lifecycle method. This will run when a component is first mounted onto the vitual DOM. There are several other lifecycle methods as well. Peep the React docs for more info
  componentDidMount(){
    console.log('I mounted')
  }
  render() {
    return (
      <div className="selected-color"
        //setting the background from state which is being updated whenver a new prop is passed to it
        style={{ background: this.state.color }}></div>
    )
  }
}

export default SelectedColor