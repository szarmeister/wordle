import "./css/AppScreen.css";
import Keyboard from "../components/Keyboard";
import React, {useEffect} from "react";
import Grid from "../components/Grid";
import useWordle from "../hooks/useWordle";

const AppScreen = ({initialGrid, initialGridResult, givenWord}) => {
    const {
        grid,
        gridResult,
        currentRow,
        currentColumn,
        gameOver,
        usedKeys,
        handleKeyUp
    } = useWordle({initialGrid, initialGridResult, givenWord});

    useEffect(() => {
        if (!gameOver) {
            window.addEventListener("keyup", handleKeyUp);
        }
        return () => window.removeEventListener("keyup", handleKeyUp)
    }, [handleKeyUp, gameOver]);


    return (
        <div className={"main"}>
            {gameOver && ("Game is over. The given word was " + givenWord + ".")}
            <Grid gridSetup={grid} gridResult={gridResult} currentRow={currentRow} currentColumn={currentColumn}/>
            <Keyboard gameOver={gameOver} usedKeys={usedKeys} handleKeyUp={handleKeyUp}/>
        </div>
    );

}

export default AppScreen;
