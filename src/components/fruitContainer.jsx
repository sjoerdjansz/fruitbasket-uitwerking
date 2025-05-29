import './fruitContainer.css';

export function FruitContainer({
                                   icon,
                                   fruitTitle,
                                   count,
                                   handleClick
                               }) {
    return (
        <div className="fruit-container">
            <div className="left-content">
                <img className="fruit-icon" src={icon} alt={fruitTitle}/>
                <h2 className="fruit-title">{fruitTitle}</h2>
            </div>
            <div className="right-content">
                <button type="button" name={`${fruitTitle}-decrease`} onClick={handleClick}>–</button>
                <span>{count}</span>
                <button type="button" name={`${fruitTitle}-increase`} onClick={handleClick}>+</button>
            </div>
        </div>
    );
}