import { FC } from "react"
import { FaTimes } from 'react-icons/fa'

export type ticketProp = {
    // id: number,
    text: string,
    storyPoints: number,
    isComplete: boolean,
    children: JSX.Element[]
}
const Ticket: FC<ticketProp> = ({ text, storyPoints }) => {
    return (
        <div className="task">
            <h3>{text} <FaTimes style={{color:'red', 
            cursor:'pointer'}}/></h3>
            <p>{storyPoints}</p>
        </div>
    )
}
export default Ticket