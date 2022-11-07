import React, { Component } from 'react'
import Logo from './Logo'
import style from './ModuleCss.module.css'
import Radium from 'radium'

const styleVar = {
  "color" : "Blue",
  "font-size" : "30px",
  ":hover": {
    'color': "Red"
  }
}

class Table extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      counter : 0,
      name: ""
    }
  }
  increment() {
    this.setState({counter: this.state.counter + 1}, () => {console.log(this.state.counter);})
  }
  changeName(name) {
    this.setState({name: name});
  }
  render() {
    return (
      <div className = {style.secondary}>
        <p className='fileName'>Table.js</p>
        <table border={2}>              
          <tbody>
            <tr>
              <td>{this.props.software}</td>
              <td>{this.props.version}</td>
            </tr>
          </tbody>
        </table>

        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment.bind(this)}>Increment</button>

        <hr></hr>
        <Logo alt = "Logo" eventHandler = {this.changeName.bind(this)}></Logo>

        <p style={styleVar}>Thank You!! {this.state.name}</p>
      </div>
    )
  }
}

export default Radium(Table);