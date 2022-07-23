import "./css/Button.css";


const Button = ({checkedState, keyName, onClickFunction}) => {
    if (keyName === "ENTER" || keyName === "DEL") {
        return <button onClick={onClickFunction} key={keyName}
                       className={"keyboardButtonSpecial"}>{keyName}</button>;
    }
    return <button onClick={onClickFunction} key={keyName} className={checkedState ? "keyboardButton " + checkedState : "keyboardButton"}>{keyName}</button>;
}

export default Button