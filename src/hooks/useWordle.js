import {useState} from "react";


const useWordle = ({initialGrid, initialGridResult, givenWord}) => {
    const [grid, setGrid] = useState(initialGrid);
    const [gridResult, setGridResult] = useState(initialGridResult)
    const [currentRow, setCurrentRow] = useState(0);
    const [currentColumn, setCurrentColumn] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [usedKeys, setUsedKeys] = useState({green: [], yellow: [], grey: []})

    const handleSubmitGuess = () => {
        const createdWord = grid[currentRow].join("");
        if (createdWord.length === givenWord.length) {

            const keysUsed = usedKeys;

            for (let i = 0; i < createdWord.length; i++) {
                if (createdWord[i] === givenWord[i]) {
                    gridResult[currentRow][i] = "green";
                    if (!keysUsed.green.includes(createdWord[i])) {
                        keysUsed.green.push(createdWord[i]);
                    }
                } else if (givenWord.includes(createdWord[i])) {
                    gridResult[currentRow][i] = "yellow";
                    if (!keysUsed.yellow.includes(createdWord[i])) {
                        keysUsed.yellow.push(createdWord[i]);
                    }
                } else {
                    gridResult[currentRow][i] = "grey";
                    if (!keysUsed.grey.includes(createdWord[i])) {
                        keysUsed.grey.push(createdWord[i]);
                    }
                }
            }

            setCurrentRow(currentRow + 1);
            setCurrentColumn(0);
            setUsedKeys(keysUsed);
            setGridResult(gridResult);
            if (currentRow + 1 >= givenWord.length || createdWord === givenWord) {
                setGameOver(true);
            }

        }
    };

    const handleDeleteLetter = () => {
        if (currentColumn - 1 >= 0) {
            grid[currentRow][currentColumn - 1] = "";
            setCurrentColumn(currentColumn - 1);
            setGrid(grid);
        }
    };

    const handlePutLetter = (key) => {
        if (currentColumn < givenWord.length) {
            grid[currentRow][currentColumn] = key.toUpperCase();
            setCurrentColumn(currentColumn + 1)
            setGrid(grid);
        }
    };

    const handleKeyUp = ({key}) => {
        console.log(key);
        if (key === "Enter") {
            handleSubmitGuess();
        } else if (key === "Delete" || key === "Backspace") {
            handleDeleteLetter();
        } else if (/^[A-Za-z]$/.test(key)) {
            handlePutLetter(key);
        }
    };


    return {
        grid,
        setGrid,
        gridResult,
        setGridResult,
        currentRow,
        setCurrentRow,
        currentColumn,
        setCurrentColumn,
        gameOver,
        setGameOver,
        usedKeys,
        setUsedKeys,
        handleKeyUp
    };


}

export default useWordle;