import React from "react";
import {Link} from "react-router-dom";
const Navbar = () =>{
  return(
     <div>
      
             <Link to ="/"><img src="../images/logo.png" className="logo"/></Link>
             <ul className="my-navbar"> 
                <li>
                  <button type="button" class="btn"><Link to ="/">Home</Link></button>
                </li>
                <li>
                <button type="button" class="btn"><Link to ="/about">About Us</Link></button>
                </li>
                <li>
                <button type="button" class="btn"><Link to ="/signup">Sign up</Link></button>
                       
                </li>
                <li>
                  <button type="button" class="btn"> <Link to ="/login">Log in</Link></button>
                       
                </li>

        </ul>

    </div>
  )
   
}
export default Navbar;