import React, { Component } from 'react'
import Logo from './Logo'
import style from './ModuleCss.module.css'
import Radium from 'radium'

const styleVar = {
  "color" : "Blue",
  "fontSize" : "30px",
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

    console.log('Table.js constructor invoked');
  }

  static getDerivedStateFromProps() {
    console.log('Table.js get derived State From Props invoked');
    return null;
  }

  componentDidMount() {
    console.log('Table.js component did mount invoked');
  }

  shouldComponentUpdate(){
    console.log('Table.js Should component update invoked');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Table.js get snapshot before update invoked');
    return true;
  }

  componentDidUpdate() {
    console.log('Table.js component did update invoked');
  }

  componentWillUnmount(){
    console.log('Table.js component will unmount invoked');
  }


  increment() {
    this.setState({counter: this.state.counter + 1}, () => {console.log(this.state.counter);})
  }
  changeName(name) {
    this.setState({name: name});
  }
  render() {

    console.log('Table.js render invoked');

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