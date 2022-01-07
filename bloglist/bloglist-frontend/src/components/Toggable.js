import React, { useState } from 'react'

const Toggable=(props) => {
  const [visibility,setVisibility] =useState(false)

  const toggleVisbibilty=() => {
    setVisibility(!visibility)
  }

  const hideWhenVisible ={ display:visibility? 'none':'' }
  const showWhenVisible ={ display:visibility? '':'none' }

  return(
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisbibilty}>{props.buttonName}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisbibilty}>cancel</button>
      </div>
    </div>
  )
}

export default Toggable
