import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
    // fetch('http://realworld-docker.com/api/posts').then( res => {
    //   console.log(res)
    // })

    const makeReq = () => {
        axios.get("/api/user").then(res => console.log(res.data));
    };

    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>hello from adf</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
            <button onClick={makeReq}>Make req</button>
        </div>
    );
}

export default App;
