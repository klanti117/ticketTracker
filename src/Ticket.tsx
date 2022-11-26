import { FC } from "react"

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
            <h3>{text}</h3>
            <p>{storyPoints}</p>
        </div>
    )
}
export default Ticket