import './App.css';
import React from "react";

// images
import strawberry from "./assets/strawberry.png";
import kiwi from "./assets/kiwi.png";
import banana from "./assets/banana.png";
import apple from "./assets/apple.png";

function App() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-container">
                <div className="left-content">
                    <img className="fruit-icon" src={strawberry} alt="strawberry"/>
                    <h2 className="fruit-title">Strawberry</h2>
                </div>
                <div className="right-content">
                    <button type="button ">–</button>
                    <span>0</span>
                    <button type="button ">+</button>
                </div>
            </div>

            <div className="fruit-container">
                <div className="left-content">
                    <img className="fruit-icon" src={kiwi} alt="kiwi"/>
                    <h2 className="fruit-title">Kiwi</h2>
                </div>
                <div className="right-content">
                    <button type="button ">–</button>
                    <span>0</span>
                    <button type="button ">+</button>
                </div>
            </div>

            <div className="fruit-container">
                <div className="left-content">
                    <img className="fruit-icon" src={banana} alt="banana"/>
                    <h2 className="fruit-title">Banana</h2>
                </div>
                <div className="right-content">
                    <button type="button ">–</button>
                    <span>0</span>
                    <button type="button ">+</button>
                </div>
            </div>

            <div className="fruit-container">
                <div className="left-content">
                    <img className="fruit-icon" src={apple} alt="apple"/>
                    <h2 className="fruit-title">Apple</h2>
                </div>
                <div className="right-content">
                    <button type="button ">–</button>
                    <span>0</span>
                    <button type="button ">+</button>
                </div>
            </div>
        </>
    );
}

export default App;
