import React from "react";
//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <form>
        <label>
          Poem Title:
          <input type="text" name="title" />
        </label>
        {/* <input type="submit" value="submit" /> */}

        {/* <label>
          Status: */}
        <option value="published">published</option>
        <option value="out">out</option>

        {/* </label> */}
        <input type="add poem" value="add" />
        {/* <label>
          Date Written:
          <input type="text" name="dateWritten" />
        </label>
        <input type="submit" value="submit" />
        <label>
          Magazine:
          <input type="text" name="magazine" />
        </label>
        <input type="submit" value="submit" />
        <label>
          Dates Out:
          <input type="text" name="title" />
        </label>
        <input type="submit" value="dates" />
        <label>
          Response:
          <input type="text" name="response" />
        </label>
        <input type="submit" value="submit" /> */}
      </form>
    </div>
  );
}

export default App;
