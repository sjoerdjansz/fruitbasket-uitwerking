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
import {FormElement} from "./components/formElement.jsx";

function App() {
    const [fruits, setFruits] = React.useState({
        "strawberry": 0,
        "kiwi": 0,
        "banana": 0,
        "apple": 0,
    });

    const [formDetails, setFormDetails] = React.useState({
        "firstname": "",
        "lastname": "",
        "age": 0,
        "zipcode": "",
        "delivery": "",
        "time": "",
        "comment": "",
        "tos": false,
    });

    function handleChange(e) {
        const formValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        return setFormDetails({
            ...formDetails,
            [e.target.name]: formValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(fruits);
        console.log(formDetails);
        setFormDetails({
            "firstname": "",
            "lastname": "",
            "age": 0,
            "zipcode": "",
            "delivery": "",
            "time": "",
            "comment": "",
            "tos": false,
        });
    }

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

            <button className="submit-button" type="button" name="reset-fruit"
                    onClick={() => resetFruitCount()}>Reset
            </button>

            <form onSubmit={handleSubmit}>
                <FormElement type="text" name="firstname" value={formDetails.firstname}
                             label="Voornaam" handleChange={handleChange}/>
                <FormElement type="text" name="lastname" value={formDetails.lastname}
                             label="Achternaam" handleChange={handleChange}/>
                <FormElement type="number" name="age" value={formDetails.age} label="Leeftijd"
                             handleChange={handleChange}/>
                <FormElement type="text" name="zipcode" value={formDetails.zipcode}
                             label="Postcode" handleChange={handleChange}/>
                <div className="form-element">
                    <label htmlFor="delivery">Bezorgfrequentie</label>
                    <select name="delivery" id="delivery" value={formDetails.delivery}
                            onChange={handleChange}>
                        <option value="weekly">Iedere week</option>
                        <option value="biweekly">Iedere twee weken</option>
                        <option value="monthly">Iedere maand</option>
                    </select>
                </div>
                <div className="radio-element">
                    <input type="radio"
                           name="time"
                           id="day"
                           value="day"
                           checked={formDetails.time === "day"}
                           onChange={handleChange}
                    />
                    <label htmlFor="day">During the day</label>
                </div>
                <div className="radio-element">
                    <input type="radio"
                           name="time"
                           id="evening"
                           value="evening"
                           checked={formDetails.time === "evening"}
                           onChange={handleChange}/>
                    <label
                        htmlFor="evening">During the
                        evening</label>
                </div>
                <div className="textarea-element">
                    <label htmlFor="comments">Opmerkingen</label>
                    <textarea name="comment" id="comments" cols="30" rows="10"
                              onChange={handleChange} value={formDetails.comment}></textarea>
                </div>
                <div className="tos-element">
                    <input type="checkbox" name="tos" id="tos" checked={formDetails.tos}
                           onChange={handleChange}/>
                    <label htmlFor="tos">Ik ga akkoord met de voorwaarden en verkoop mijn ziel</label>
                </div>
                <button type="submit" className="submit-button">Verzend</button>
            </form>
        </>
    );
}

export default App;
