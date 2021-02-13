import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    const heading = "flex flex-col align-center w-max";
    const h1 = "text-7xl";
    const logos = "max-h-16 inline text-center";
    return (
      <div>
        <div className="heading">
          <h1 className={h1}>MarkDown Previewer</h1>
          <p>
            Utilizing
            <img src={logo} alt="React Logo" width="60px" className={logos} />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
