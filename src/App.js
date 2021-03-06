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
import UseEffectWithIncorrectDepedency from './Hooks/UseEffectWithIncorrectDepedency';
import UseEffectWithHttpGet from './Hooks/UseEffectWithHttpGet';
import React from 'react';
import UseContextExample from './Hooks/UseContextExample';
import UseReducerBasic from './Hooks/UseReducerBasic';
import UseCallBackEx from './Hooks/callbackhook/UseCallBackEx';
import UseMemoSample from './Hooks/UseMemoSample';
import UseRefBasic from './Hooks/UseRefBasic';
import UseRefBasic2 from './Hooks/UseRefBasic2';

export const UserContext = React.createContext("Suraj")
export const ChannelContext = React.createContext("Channle")

function App() {
  return (
    <div className="App">
      <UseRefBasic2/>
      {/* <UseRefBasic /> */}
      {/* <UseMemoSample/> */}
      {/* <UseCallBackEx/> */}
      {/* <UseReducerBasic/> */}
      {/* <UserContext.Provider value="Dumeel">
      <UseContextExample/>
      </UserContext.Provider> */}
      {/* <UseEffectWithHttpGet /> */}
      {/* <UseEffectWithIncorrectDepedency/> */}
      {/* <MouseContainer />  */}
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
