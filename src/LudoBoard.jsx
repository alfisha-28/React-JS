import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue : 0, yellow : 0, green : 0, red : 0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        console.log(`moves.blue = ${moves.blue}`);
        setMoves ((prevMoves) => {
           return { ...prevMoves, blue: prevMoves.blue + 1}; // spread (...prevmoves) used in Object states
        });

    setArr((prevArr) => { 
        return [...prevArr, "blue moves"]; // spread (...prevArr) used in array states
    });
};

    let updateYellow = () => {
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves ((prevMoves) => {
           return { ...prevMoves, yellow: prevMoves.yellow + 1};
        });

    };

    let updateGreen = () => {
        console.log(`moves.green = ${moves.green}`);
        setMoves ((prevMoves) => {
           return { ...prevMoves, green: prevMoves.green + 1}; 
        });

    };

    let updateRed = () => {
        console.log(`moves.red = ${moves.red}`);
        setMoves ((prevMoves) => {
           return { ...prevMoves, red: prevMoves.red + 1};
        });

    };

    return(
       <div>
         <h2>Game Begins!</h2>
         <p>{arr}</p>
         <div className="Board">
            <p>Blue moves = {moves.blue}</p>
            <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor : "yellow", color:"black"}} onClick={updateYellow}>+1</button>
            <p>Green moves = {moves.green} </p >
            <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
         </div>
       </div>
    );
}