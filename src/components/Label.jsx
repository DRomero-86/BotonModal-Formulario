import React from 'react'

function Label({para, description}) {
  return (
    <label for={para}> {description} </label>
  )
}

export default Label