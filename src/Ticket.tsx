import { FC } from "react"
import { FaTimes } from 'react-icons/fa'

export type ticketProp = {
    ticketItem: Ticket
    onDelete: (ticket:Ticket) => void
    onToggleCompletion: () => void
}
const Ticket: FC<ticketProp> = 
({ ticketItem, onDelete, onToggleCompletion }) => {
    return (
        <div className="ticket" onDoubleClick={onToggleCompletion}>
            <h3>{ticketItem.text}
                <FaTimes style={{color:'red', 
                cursor:'pointer'}} 
                onClick={() => onDelete(ticketItem)}/>
            </h3>
            <p>{ticketItem.storyPoints}</p>
        </div>
    )
}
export default Ticket