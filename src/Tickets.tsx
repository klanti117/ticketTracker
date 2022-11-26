import { FC } from "react"
import Ticket, {ticketProp} from "./Ticket"

type ticketsProp = {
    tickets: Array<ticketProp>
}

const Tickets: FC<ticketsProp> = ({ tickets }) => {
    return (
        <>
            {tickets.map(
                (ticket, idx) => (
                    // <h3 key={idx}>{ticket.text}</h3>
                    <Ticket key={idx} 
                    text={ticket.text} storyPoints={ticket.storyPoints} 
                    children={[]} isComplete={false} />
                ))}
        </>
    )
}
export default Tickets