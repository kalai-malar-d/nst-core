interface IButtonProps {
    text:string;
}
import React from 'react';
const Button:React.FC<IButtonProps> = ({text}) =>{
    return (
        <div>Button{text}</div>
    )
}

export default Button;