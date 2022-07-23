import "./css/Keyboard.css";
import React from "react";
import Button from "./Button";


const Keyboard = ({gameOver, handleKeyUp, usedKeys}) => {
    const keyboard = React.createElement("div", {className: "keyboard", children: []});
    const joinedUsedKeys = {
        green: usedKeys.green.join(""),
        yellow: usedKeys.yellow.join(""),
        grey: usedKeys.grey.join("")
    };

    const keyState = (keyParam) => {
        switch (true) {
            case joinedUsedKeys.green.includes(keyParam):
                return "keyboardButtonGreen";
            case joinedUsedKeys.yellow.includes(keyParam):
                return "keyboardButtonYellow";
            case joinedUsedKeys.grey.includes(keyParam):
                return "keyboardButtonGrey";
            default:
                return "";
        }
    }

    const keyButtons = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"]
    ];

    keyButtons.forEach((row, rowIndex) => {
        const rowDiv = React.createElement("div", {
            key: "row" + rowIndex,
            className: "keyboardRow",
            children: []
        });
        row.forEach(key => {
            const keyButton = <Button checkedState={keyState(key)} key={key} keyName={key}
                                      onClickFunction={gameOver ? null : handleKeyUp}/>
            rowDiv.props.children.push(keyButton);
        });
        keyboard.props.children.push(rowDiv);
    });


    return keyboard;


}

export default Keyboard;