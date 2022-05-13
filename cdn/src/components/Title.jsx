//create A title component
import React from 'react';


const Title = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    );
    }


export default Title;