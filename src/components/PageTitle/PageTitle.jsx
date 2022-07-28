import React from 'react';

export function PageTitle(props) {
    const { title, number } = props
    return (
        <div className="details-panel">
            <h1>{title}</h1>
            { number ? <p className="number">{number} db</p> : null}
       </div>
    )
  }

