import { FC } from "react"
import Ticket, {ticketProp} from "./Ticket"

type ticketsProp = {
    tickets: Array<Ticket>,
    onDelete: () => void
}

const Tickets: FC<ticketsProp> = ({ tickets, onDelete }) => {
    return (
        <>
            {tickets.map(
                (ticket, idx) => (
                    // <h3 key={idx}>{ticket.text}</h3>
                    <Ticket key={idx} 
                    ticketItem={ticket}
                    onDelete={onDelete}/>
                ))}
        </>
    )
}
export default Tickets