import React from 'react';
import "../HomePage.css";
function Logos() {
    const logosdata = [
        {
            name:"Airbnb",
        },
        {
            name:"samsung",
        },
        {
            name:"microsoft",
        },
        {
            name:"Apple",
        }
    ]
  return (
    <div className='Logos'>
        {logosdata.map(cvalue => <img src={require(`../../../Assets/img/${cvalue.name}.png`)} />)}
    </div>
  )
}

export default Logos