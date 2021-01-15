import React from 'react';
import {Link} from 'react-router-dom';
import './library.css'
function Navi()
{
    return(
        <div>
           
            <nav className="navbar navbar-dark bg-dark">
            <ul className="justify-content-right">
            
                <Link to='/app' className="nav-item">Home
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



                <Link to='/createuser' className="nav-item">Login
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                <Link to='/registerpage' className="nav-item">Register 
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to='/about' className="nav-item">About us
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                

               
            </ul>
            </nav>
        </div>
    );
}
export default Navi;
