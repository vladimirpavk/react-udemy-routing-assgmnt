import React from 'react';

import classes from './ErrorComponent.module.css';

const ErrorComponent = ()=>{
    
    console.log(classes);
    return (
        <div className="ErrorComponent">
            <h3>Something bad happened</h3>
            <h4>Not valid route...</h4>
        </div>
    );
}

export default  ErrorComponent;