import { useState } from "react"
import Header from "./Header"
import './index.css'
import Tickets from "./Tickets"
import AddTicket from "./AddTicket"
import Toggle from "./Toggle"

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

  // toggle completion
  const onToggleCompletion = (selectedTicket: Ticket) => {
    // console.log("toggleCompletion")
    setTickets(tickets.map((t) => t === selectedTicket ? 
      {...t, isComplete: !t.isComplete} : t))
  }

  // Add ticket 
  const onAdd = (newTicket: Ticket) => {
    // console.log("onAdd")
    setTickets([...tickets, newTicket])
  }

  return (
    <div className="container">
      {/* <Header/>
      <AddTicket onAdd={onAdd}/>
      {tickets.length>0 ? 
        <Tickets 
          tickets={tickets} 
          onDelete={onDelete}
          onToggleCompletion={onToggleCompletion}/>
        :(" No tickets to show")} */}
        <Toggle/>
    </div>
  )
}

export default App
