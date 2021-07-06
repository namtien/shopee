import {Link} from "react-router-dom";
import {useState} from "react";

export const Nav = () => {

   const [isLogin, setIsLogin] = useState(true)

   return isLogin ? (
      <nav>
         <ul>
            <li>
               <Link to="/product-manager">Product Manager</Link>
            </li>
            <li className="dropdown" >
               <button id="infoUser" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Hello, Admin</button>
               <ul className="dropdown-menu" aria-labelledby="infoUser">
                  <li><i className="fas fa-user"></i> Info User</li>
                  <li><i className="fas fa-sign-in-alt"></i> Log out</li>
               </ul>
            </li>
         </ul>
      </nav>
   ) : (
      <nav>
         <ul>
            <li>
               <Link to="/log-in">Login</Link>
            </li>
         </ul>
      </nav>
   )
}