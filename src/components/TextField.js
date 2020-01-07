import React from 'react'

const TextField = (props) => {
  return(
    <input
      type="text"
      name={props.fieldName}
      id={props.id}
      value={props.content}
      onChange={props.handleChange}
    />
  )
}

export default TextField;
