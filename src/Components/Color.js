import React from 'react'

//Stateless component using an arrow function, passing in props as a param
const Color = (props) => (
  <div className="color"
    //setting the background color with style and the passed in bgColor prop
    style={{ background: props.bgColor }}
    //any time a Color component is clicked is fires the passed in method with bgColor as an argument
    onClick={() => props.method(props.bgColor)}></div>
)

export default Color