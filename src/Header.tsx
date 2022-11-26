import Button from "./Button"

const Header = () => {
    return (
        <>
        <header style={headerStyle}>Task Tacker</header>
        <Button color={'green'} text={'Add'} /></>
    )
}

const headerStyle = {
    color:'red'
}
export default Header