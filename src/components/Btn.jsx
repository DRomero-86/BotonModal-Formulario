import React from 'react'

function Btn({clase, name}) {
  return (
        <button id={clase} className={`btn ${clase}`}>{name}</button>        
  )
}

export default Btn

                    