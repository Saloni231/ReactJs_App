import React, { Component } from 'react'

const browser = [
  {value: 'Chrome'},
  {value: 'Safari'},
  {value: 'Opera'},
  {value: 'Internet Explorer'}
]

class Conditional extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      browser : '',
      message : ""
    }
    this.browserChange = this.browserChange.bind(this);
  }
  browserChange (e) {
    this.setState({browser: e.target.value})
    if (e.target.value != 'Chrome') {
      this.setState({message: "Please use Chrome"})
    }
    else{
      this.setState({message: "Thanks for using Chrome"})
    }
  }
  render() {
    return (
      <div>
        <p className = 'fileName'>conditional.js</p>
        <p>{this.state.message}</p>
        Choose Your Browser : <select value = {this.state.browser} onChange = {this.browserChange}>
          {browser.map((opt) => <option value = {opt.value} key = {opt.value}>{opt.value}</option>)}
        </select>
      </div>
    )
  }
}

export default Conditional