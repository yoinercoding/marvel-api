import "./App.css"
import React, { Fragment } from "react";
import Header from "./components/header";
import Characters from "./components/characters";
import './main.css'
import './components/header.css'

function App() {
    return (
        <Fragment>
            <Header title="Marvel API"/>
            <Characters/>
        </Fragment>
    );
}

export default App;