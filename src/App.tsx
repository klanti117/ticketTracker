import { useState } from "react"
import Header from "./Header"
import './index.css'
import Tickets from "./Tickets"

function App() {
  const [tickets, setTickets] = useState([
    {
      text: "React proj",
      storyPoints: 3,
      isComplete: false,
      children: []
    },
    {
      text: "add sorting feature",
      storyPoints: 5,
      isComplete: false,
      children: []
    },
    {
      text: "Write tests",
      storyPoints: 3,
      isComplete: false,
      children: []
    }
  ])
  return (
    <div className="container">
      <Header/>
      <Tickets tickets={tickets} />
    </div>
  )
}

export default App
