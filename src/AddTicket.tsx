import React, { useState } from "react"

const AddTicket = ({ onAdd } : {onAdd: any}) => {
    const [text, setText] = useState('')
    const [storyPoints, setPoint] = useState('')
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!text){
            alert("Please add ticket description")
            return 
        }

        onAdd({ text, storyPoints })
        //clear Form
        setText('')
        setPoint('')
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div  className="form-control">
                <label>Ticket</label>
                <input 
                    type="text" 
                    placeholder="Add Ticket description"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />
                <label>Add story points</label>
                <input 
                    type="number" 
                    placeholder="Add story points"
                    value={storyPoints}
                    onChange={(e)=>setPoint(e.target.value)}
                />
                <input 
                    type="submit" 
                    value="Save" 
                    className="btn btn-block"
                />
            </div>
        </form>
    )
}

export default AddTicket