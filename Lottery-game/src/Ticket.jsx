import './Ticket.css';
import TicketNum from "./TicketNum";

export default function Ticket({ticket}) {
    return (
       <div className="Ticket">
          <h2>Ticket</h2>
          <hr></hr>
          {ticket.map((num, idx) => (
            <TicketNum num={num} key={idx}/>
          ))}   
       </div>
    );
}