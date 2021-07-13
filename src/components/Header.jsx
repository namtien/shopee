import {Nav} from "./Nav";
import "../assets/css/header.scss"
import {Link} from "react-router-dom";
import {Cart} from "./Cart";

export const Header = () => {
   return (
      <header>
         <div className="container-fluid">
            <div className="row row-align">
               <div className="col-lg-7">
                  <div className="logo">
                     <Link to="/">Shopee</Link>
                  </div>
               </div>
               {/*<div className="col-lg-5">
                  <Search/>
               </div>*/}
               <div className="col-lg-4 text-end">
                  <Nav/>
               </div>
               <div className="col-lg-1 text-end">
                  <Cart/>
               </div>
            </div>
         </div>
      </header>
   )
}