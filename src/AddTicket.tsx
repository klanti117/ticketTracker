const AddTicket = () => {
    return (
        <form className="add-form">
            <div  className="form-control">
                <label>Ticket</label>
                <input type="text" placeholder="Add Ticket description"/>
                <label>Add story points</label>
                <input type="number" placeholder="Add story points"/>
                <input type="submit" value="Save" className="btn btn-block"/>
            </div>
        </form>
    )
}

export default AddTicket