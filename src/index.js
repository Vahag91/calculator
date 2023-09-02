import React from "react";
import ReactDOM from "react-dom/client";
import Keyboard from "./Keyboard/Keyboard";
import Screen from "./Screen/Screen";
import "./index.css"


const Calc = () => {

    const calcArray = [
        {text: "C", id:1},
        {text: "<", id:2},
        {text: "/", id:3},
        {text: "X", id:4},
        {text: "5", id:5},
        {text: "7", id:6},
        {text: "8", id:7},
        {text: "9", id:8},
        {text: "-", id:9},
        {text: "4", id:10},
        {text: "5", id:11},
        {text: "6", id:12},
        {text: "1", id:13},
        {text: "2", id:14},
        {text: "3", id:14},
        {text: "=", id:15},
        {text: "0", id:16},
        {text: ".", id:17},
    ]

    return <div className="calc">
            <Screen />
     <Keyboard keys={calcArray}/>
    </div>
}







const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Calc />)