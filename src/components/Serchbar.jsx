import React from 'react'


const Serchbar = ([type, defaultvalue,name]) => {
  return (
    <div>
        <label>{label}</label>
      <input type={type}
      name={name} 
      defaultValue={defaultvalue} className=''  />
    </div>
  )
}

export default Serchbar
