import React from 'react';

const userInput = (props) => {
    const userInputStyle = {
        border: '1px solid green',
        'border-radius': '5px'
    }
    return (
        <div>
        <input type="text" onChange={props.changeHandler} value={props.name} style={userInputStyle}/>
        </div>
    );
}

export default userInput;