import React, { Component } from 'react'
import './MyStyle.css'

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

    console.log('Conditional.js constructor invoked');
  }

  static getDerivedStateFromProps() {
    console.log('Conditional.js get derived State From Props invoked');
    return null;
  }

  componentDidMount() {
    console.log('Conditional.js component did mount invoked');
  }

  shouldComponentUpdate(){
    console.log('Conditional.js Should component update invoked');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Conditional.js get snapshot before update invoked');
    return true;
  }

  componentDidUpdate() {
    console.log('Conditional.js component did update invoked');
  }

  componentWillUnmount(){
    console.log('Conditional.js component will unmount invoked');
  }


  browserChange (e) {
    this.setState({browser: e.target.value})
    if (e.target.value !== 'Chrome') {
      this.setState({message: "Please use Chrome"})
    }
    else{
      this.setState({message: "Thanks for using Chrome"})
    }
  }
  render() {

    console.log('Conditional.js render invoked');

    return (
      <div className= 'primary'>
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