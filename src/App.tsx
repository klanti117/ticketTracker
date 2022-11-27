import { useState } from "react"
import Header from "./Header"
import './index.css'
import Tickets from "./Tickets"

const intialTicketsArr: Array<Ticket> = [
  {
    text: "React proj",
    storyPoints: 3,
    isComplete: false,
  },
  {
    text: "add sorting feature",
    storyPoints: 5,
    isComplete: false,
  },
  {
    text: "Write tests",
    storyPoints: 3,
    isComplete: false,
  }
]
function App() {
  const [tickets, setTickets] = useState(intialTicketsArr)

  //Delete tickets
  const onDelete = (selectedTicket: Ticket) => {
    // console.log("x icon clicked")
    setTickets(tickets.filter(t => t !== selectedTicket))
  }

  return (
    <div className="container">
      <Header/>
      {tickets.length>0 ? 
        <Tickets 
          tickets={tickets} 
          onDelete={onDelete}/>
        :(" No tickets to show")}
    </div>
  )
}

export default App
