import React from "react";
import "./css/Grid.css";
import LetterCell from "./LetterCell";

const Grid = ({gridResult, gridSetup, currentRow, currentColumn}) => {
    const gridBoard = React.createElement("div", {className: "grid", children: []});

    for (let i = 0; i < gridSetup.length; i++) {
        const className = i < currentRow ? "guessRow past" : "guessRow";

        const guessRow = React.createElement("div", {
            key: "row" + i,
            className,
            children: []
        });


        for (let j = 0; j < gridSetup.length; j++) {
            let checkedState = gridResult[i][j];
            if (j === currentColumn - 1 && i === currentRow) {
                checkedState = "current";
            }
            const guessCell = <LetterCell key={"cell_" + i + "_" + j} checkedState={checkedState}
                                      keyName={"cell_" + i + "_" + j} letter={gridSetup[i][j]}/>
            guessRow.props.children.push(guessCell);
        }


        gridBoard.props.children.push(guessRow);
    }

    return gridBoard;

}

export default Grid