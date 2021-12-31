import logo from './logo.svg';
import './App.css';
import { HttpGet } from './Comoponents/HttpGet';
import HttpPost from './Comoponents/HttpPost';
import UseStateBasic from './Hooks/UseStateBasic';
import UseStateWithPrevState from './Hooks/UseStateWithPrevState';
function App() {
  return (
    <div className="App">
      <UseStateWithPrevState />
      {/* <UseStateBasic/> */}
      {/* <HttpPost/> */}
      {/* <HttpGet/> */}
    </div>
  );
}

export default App;
