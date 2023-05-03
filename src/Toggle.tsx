import React, { useState } from 'react'

const Toggle = () => {
  const [isHappy, setIsHappy] = useState(true)
  const [isBroken, setIsBroken] = useState(true)
  const toggleHappy = () => {
    setIsHappy(!isHappy)
  }
  const toggleBroken = () => {
    setIsBroken(!isBroken)
  }
  return (
    <div>
        <h1 onClick={toggleHappy}>{isHappy ? "😁" : "😭"}</h1>
        <h1 onClick={toggleBroken}>{isBroken ? "💔" : "❤️‍🔥"}</h1>
    </div>
  )
}

export default Toggle