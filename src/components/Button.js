import "./css/Button.css";


const Button = ({checkedState, keyName, onClickFunction}) => {
    if (keyName === "Enter" || keyName === "Delete") {
        return <button onClick={() => onClickFunction({key: keyName})} key={keyName}
                       className={"keyboardButtonSpecial"}>{keyName}</button>;
    }
    return <button onClick={() => onClickFunction({key: keyName})} key={keyName} className={checkedState ? "keyboardButton " + checkedState : "keyboardButton"}>{keyName}</button>;
}

export default Button