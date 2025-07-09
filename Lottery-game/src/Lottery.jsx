import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=4, winningSum=20}) {
    let [ticket, setTicket] = useState([genTicket(n)]);
    let isWinning = sum(ticket) === winningSum;
    
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return(
        <div className="ticket-container">
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you won the lottery!!!!"}</h3>
        </div>
    );
}