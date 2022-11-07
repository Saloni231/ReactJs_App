import React from "react";
import logo from './logo.svg'

function Logo(props) {
  return (
    <div>
        <p className='fileName'>Logo.js</p>
        <img src = {logo} className = "App-logo" alt = {props.alt}></img>
        <p>
          Name : <input type={"text"} onChange = {(event) => props.eventHandler(event.target.value)}></input>
        </p>
    </div>
  )
}

export default Logo;