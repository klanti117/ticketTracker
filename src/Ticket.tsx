import { FC } from "react"
import { FaTimes } from 'react-icons/fa'

export type ticketProp = {
    ticketItem: Ticket
    onDelete: () => void
}
const Ticket: FC<ticketProp> = ({ ticketItem, onDelete }) => {
    return (
        <div className="task">
            <h3>{ticketItem.text}
                <FaTimes style={{color:'red', 
                cursor:'pointer'}} 
                onClick={onDelete}/>
            </h3>
            <p>{ticketItem.storyPoints}</p>
        </div>
    )
}
export default Ticket