import React, { useState } from 'react'

const Toggle = () => {
  const [isHappy, setIsHappy] = useState(true)
  const toggle = () => {
    setIsHappy(!isHappy)
  }
  return (
    <div>
        <h1 onClick={toggle}>{isHappy ? "😁" : "😭"}</h1>
    </div>
  )
}

export default Toggle