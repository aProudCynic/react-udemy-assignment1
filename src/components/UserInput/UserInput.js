import React from 'react';

const userInput = (props) => {
    return (
        <div>
        <input type="text" onChange={props.changeHandler} value={props.name}/>
        </div>
    );
}

export default userInput;