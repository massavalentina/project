import React from "react";
import './Buttons.css'
import {Link} from "react-router-dom"

function Buttons(){

 


    return(
        <div class="container">

        <div class="centered-div">

        <div class="button-container">

        <div class="button-group">

          <Link className="span"><span>span 1</span></Link>

          <Link className="span"><span>span 2</span></Link>

        </div>

        <div class="button-group">

        <Link className="span"><span>span 3</span></Link>
        <Link className="span"><span>span 5</span></Link>

        </div>

      </div>
      </div>
      </div>      
        
    )

}

export default Buttons