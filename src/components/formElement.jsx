import './formElement.css';

export function FormElement({
                                name,
                                label,
                                type
                            }) {
    return (
        <div className="form-element">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name}/>
        </div>
    );
}