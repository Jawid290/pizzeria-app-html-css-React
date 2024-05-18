import React from 'react'
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div calssName="navbar">
     <div calssName="leftSide">

      <img src={Logo} />

     </div>

     <div calssName="rightSide">

          <link to="/" >Home</link>
          <link to="/menu" >Menu</link>  
          <link to="/abour" >About</link>
          <link to="/contact" >Contact</link>

     </div>



    </div>
  )
}

export default Navbar