import './radioElement.css';

export function RadioElement({
                                 name,
                                 value,
                                 handleChange,
                                 checked
                             }) {
    return (
        <div className="radio-element">
            <input type="radio"
                   name={name}
                   id={value}
                   value={value}
                   checked={checked}
                   onChange={handleChange}/>
            <label
                htmlFor={value}>During the {value}
            </label>
        </div>
    );
}