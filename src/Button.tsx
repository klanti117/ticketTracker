import {FC} from 'react'

type btnProps = {
    text: string,
    color?:string
}
const Button: FC<btnProps> = ({color, text}) => {
    return <button 
    style={{backgroundColor:color}}
    className="btn">{text}</button>
}

export default Button