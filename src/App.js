import './App.css';
import Table from './component/Table';
import List from './component/list';
import Conditional from './component/conditional';

function App() {
  return (
    <div className="App">
      <p className='fileName'>App.js</p>
      <h1>Welcome!!</h1>

      <hr></hr>
      <Table software = "Node.js" version = "v18.5.0"></Table>

      <hr></hr>
      <List></List>

      <hr></hr>
      <Conditional></Conditional>
    </div>
  );
}

export default App;
