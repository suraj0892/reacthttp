import logo from './logo.svg';
import './App.css';
import { HttpGet } from './Comoponents/HttpGet';
import HttpPost from './Comoponents/HttpPost';
import UseStateBasic from './Hooks/UseStateBasic';
import UseStateWithPrevState from './Hooks/UseStateWithPrevState';
import UseStateWithObjects from './Hooks/UseStateWithObjects';
import UseEffectBasic from './Hooks/UseEffectBasic';
import UseEffectConditional from './Hooks/UseEffectConditional';
import UseEffectOnce from './Hooks/useEffectOnce';
import MouseContainer from './Hooks/MouseContainer';
function App() {
  return (
    <div className="App">
      <MouseContainer /> 
      {/* <UseEffectOnce /> */}
      {/* <UseEffectConditional /> */}
      {/* <UseEffectBasic /> */}
      {/* <UseStateWithObjects/> */}
      {/* <UseStateWithPrevState /> */}
      {/* <UseStateBasic/> */}
      {/* <HttpPost/> */}
      {/* <HttpGet/> */}
    </div>
  );
}

export default App;
