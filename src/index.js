import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppScreen from "./screens/AppScreen";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";



axios.get("http://localhost:8080/get_random_word").then(result => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    const initialGrid = [];
    const initialGridResult = [];
    const word = result.data;
    for (let i = 0; i < word.length; i++) {
        initialGrid.push([]);
        initialGridResult.push([]);
        for (let j = 0; j < word.length; j++) {
            initialGrid[i].push("");
            initialGridResult[i].push("");
        }
    }
    root.render(
        <React.StrictMode>
            <AppScreen initialGridResult={initialGridResult} initialGrid={initialGrid} givenWord={word.toUpperCase()}/>
        </React.StrictMode>
    );
    reportWebVitals();
});


// axios.get("http://localhost:8080/get_word", {
//         params: {
//             length: 7,
//         }
//     }
// ).then(result => {
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     const initialGrid = [];
//     const initialGridResult = [];
//     const word = result.data;
//     for (let i = 0; i < word.length; i++) {
//         initialGrid.push([]);
//         initialGridResult.push([]);
//         for (let j = 0; j < word.length; j++) {
//             initialGrid[i].push("");
//             initialGridResult[i].push("");
//         }
//     }
//     root.render(
//         <React.StrictMode>
//             <AppScreen initialGridResult={initialGridResult} initialGrid={initialGrid} givenWord={word.toUpperCase()}/>
//         </React.StrictMode>
//     );
//     reportWebVitals();
// });


// const root = ReactDOM.createRoot(document.getElementById("root"));
// const initialGrid = [];
// const initialGridResult = [];
// const word = "abroad";
// for (let i = 0; i < word.length; i++) {
//     initialGrid.push([]);
//     initialGridResult.push([]);
//     for (let j = 0; j < word.length; j++) {
//         initialGrid[i].push("");
//         initialGridResult[i].push("");
//     }
// }
//
// root.render(
//     <React.StrictMode>
//         <AppScreen initialGridResult={initialGridResult} initialGrid={initialGrid} givenWord={word.toUpperCase()}/>
//     </React.StrictMode>
// );
// reportWebVitals();
