import React from 'react';

const userInput = (props) => {
    return (
        <div>
        <input type="text" onChange={props.changeHandler}/>
        </div>
    );
}

export default userInput;