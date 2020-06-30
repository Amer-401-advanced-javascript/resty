import React from 'react';
import './results.scss'

const res = (props) => {
    return(
        <section id="result">
            Count: {props.count}
            <br></br>
            <br></br>
           Header: <pre>{JSON.stringify( props.result.header, null, '\t' )}</pre>
            Results: <pre>{JSON.stringify( props.result.responseData, null, '\t' )}</pre>
        </section>
    )
}

export default res;