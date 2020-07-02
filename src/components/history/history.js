import React from 'react';


const History = (props) => {
//   let value = [];
  Object.keys(localStorage).map(key => {
      console.log(key);
      
  })
    return(
        <h2>
            History
        </h2>
    )
    // let LocalStorageItems = localStorage.getItem()
}

export default History;