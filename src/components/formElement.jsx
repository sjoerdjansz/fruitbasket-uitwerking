import './formElement.css';

export function FormElement({
                                name,
                                label,
                                type,
                                value,
                                handleChange
                            }) {
    return (
        <div className="form-element">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} value={value} onChange={handleChange}/>
        </div>
    );
}