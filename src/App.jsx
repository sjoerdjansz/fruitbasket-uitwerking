import './App.css';
import React from "react";

// images
import strawberry from "./assets/strawberry.png";
import kiwi from "./assets/kiwi.png";
import banana from "./assets/banana.png";
import apple from "./assets/apple.png";

//helpers
import {getFruit} from "./helpers/fruitString.js";

//components
import {FruitContainer} from "./components/fruitContainer.jsx";

function App() {
    const [fruits, setFruits] = React.useState({
        "strawberry": 0,
        "kiwi": 0,
        "banana": 0,
        "apple": 0,
    });

    function handleClick(e) {
        const value = e.target.name.toLowerCase();

        if (value.includes('increase')) {
            increase(getFruit(value));
        }

        if (value.includes('decrease')) {
            decrease(getFruit(value));
        }
    }

    function decrease(fruit) {
        return setFruits({
            ...fruits,
            [fruit]: fruits[fruit] === 0 ? fruits[fruit] = 0 : fruits[fruit] - 1,
        });
    }

    function increase(fruit) {
        return setFruits({
            ...fruits,
            [fruit]: fruits[fruit] + 1,
        });
    }

    function resetFruitCount() {
        setFruits({
            strawberry: 0,
            kiwi: 0,
            banana: 0,
            apple: 0,
        });
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <FruitContainer fruitTitle="strawberry" icon={strawberry} count={fruits.strawberry}
                            handleClick={handleClick}/>
            <FruitContainer fruitTitle="kiwi" icon={kiwi} count={fruits.kiwi} handleClick={handleClick}/>
            <FruitContainer fruitTitle="banana" icon={banana} count={fruits.banana}
                            handleClick={handleClick}/>
            <FruitContainer fruitTitle="apple" icon={apple} count={fruits.apple} handleClick={handleClick}/>

            <button className="reset-button" type="button" name="reset-fruit"
                    onClick={() => resetFruitCount()}>Reset
            </button>
        </>
    );
}

export default App;
