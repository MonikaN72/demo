import React from 'react'
import Img from './im.webp'

const StateHandle = () => {


    function message(){
        alert("This is nature picture")
    }
  return (
    <div>
        <span onClick={message}>
            <img src={Img} alt="nature" />
        </span>
    </div>
  )
}

export default StateHandle;