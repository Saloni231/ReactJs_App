import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        number : 0,
        numbers : [],
      }

      console.log('List.js constructor invoked');
    }

    static getDerivedStateFromProps() {
      console.log('List.js get derived State From Props invoked');
      return null;
    }

    componentDidMount() {
      console.log('List.js component did mount invoked');
    }

    shouldComponentUpdate(){
      console.log('List.js Should component update invoked');
      return true;
    }

    getSnapshotBeforeUpdate() {
      console.log('List.js get snapshot before update invoked');
      return true;
    }

    componentDidUpdate() {
      console.log('List.js component did update invoked');
    }

    componentWillUnmount(){
      console.log('List.js component will unmount invoked');
    }

    changeN(n) {
        this.setState({number : n})
    }
    addAtStartElement = (event) => {
      this.setState({numbers : [this.state.number].concat(this.state.numbers), txtColor: 'green'})
    }
    addAtEndElement = (event) => {
      this.setState({numbers : this.state.numbers.concat(this.state.number), txtColor: 'red'})
    }
  render() {

    console.log('List.js render invoked');

    return (
      <div>
        <p className='fileName'>list.js</p>
        <input type = {'text'} onChange = {(event) => this.changeN(event.target.value)}></input>
        <br/><button onClick = {this.addAtStartElement}>ADD AT START</button>
        <br/><button onClick = {this.addAtEndElement}>ADD AT END</button>
        {this.state.numbers.map((num, index) => <li key = {index} style = {{fontSize : "20px", color: 'greenyellow'}}>
            {index} : {num}
        </li>)}
      </div>
    )
  }
}

export default List
