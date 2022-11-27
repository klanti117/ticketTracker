import { FC } from "react"
import Ticket, {ticketProp} from "./Ticket"

type ticketsProp = {
    tickets: Array<Ticket>,
    onDelete: (ticket:Ticket) => void
    onToggleCompletion: (ticket:Ticket) => void
}

const Tickets: FC<ticketsProp> = 
({ tickets, onDelete, onToggleCompletion }) => {
    return (
        <>
            {tickets.map(
                (ticket, idx) => (
                    // <h3 key={idx}>{ticket.text}</h3>
                    <Ticket key={idx} 
                    ticketItem={ticket}
                    onDelete={onDelete}
                    onToggleCompletion={onToggleCompletion}/>
                ))}
        </>
    )
}
export default Tickets