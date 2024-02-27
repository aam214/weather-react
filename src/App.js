import "./App.css";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { Blocks } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World !</h1>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </header>
    </div>
  );
}

export default App;
