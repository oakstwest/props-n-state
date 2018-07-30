import React from 'react'

//Stateless component using an arrow function, destructring name and method off props so we don't have to write props.name or props.method
const Header = ({ name, method }) => (
  <div>
    <h1>{name} Colo Picker</h1>
    <input type="text" onChange={method} />
  </div>
)

export default Header