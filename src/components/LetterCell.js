import "./css/LetterCell.css";



const LetterCell = ({keyName, letter, checkedState}) => {

    const style = (parameter) => {
        switch (parameter) {
            case "green":
                return "letterCell green";
            case "yellow":
                return "letterCell yellow";
            case "grey":
                return "letterCell grey";
            case "current":
                return "letterCell current";
            default:
                return "letterCell";
        }
    }


    return <div key={keyName} className={style(checkedState)}>{letter}</div>;
}

export default LetterCell