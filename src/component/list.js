import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        number : 0,
        numbers : []
      }
    }
    changeN(n) {
        this.setState({number : n})
    }
    addAtStartElement = (event) => {
        this.setState({numbers : [this.state.number].concat(this.state.numbers)})
    }
    addAtEndElement = (event) => {
        this.setState({numbers : this.state.numbers.concat(this.state.number)})
    }
  render() {
    return (
      <div>
        <p className='fileName'>list.js</p>
        <input type = {'text'} onChange = {(event) => this.changeN(event.target.value)}></input>
        <br/><button onClick = {this.addAtStartElement}>ADD AT START</button>
        <br/><button onClick = {this.addAtEndElement}>ADD AT END</button>
        {this.state.numbers.map((num, index) => <li key = {index}>{index}:{num}</li>)}
      </div>
    )
  }
}

export default List
