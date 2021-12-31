import logo from './logo.svg';
import './App.css';
import { HttpGet } from './Comoponents/HttpGet';
import HttpPost from './Comoponents/HttpPost';

function App() {
  return (
    <div className="App">
      <HttpPost/>
      {/* <HttpGet/> */}
    </div>
  );
}

export default App;
