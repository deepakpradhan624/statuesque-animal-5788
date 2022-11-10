import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

  

const Navbar = () => {
  return (
    <div className="nav">
        
        <img src="https://i.ibb.co/BTnzTr2/RF.png" alt="Error" />

      <Link to={"/"} className="navlinks">
        SKINCARE
      </Link>
      <Link to={"/haircare"} className="navlinks">
       HAIRCARE
      </Link>
      <Link to={"/bestseller"} className="navlinks">
        BEST SELLERS
      </Link>
      <Link to={"/specialoffer"} className="navlinks">
        SPECIAL OFFERS
      </Link>
      <Link to={"/about"} className="navlinks">
        ABOUT
      </Link>
      <Link to={"/perkprogram"} className="navlinks">
        PERKS PROGRAM
      </Link>
      <Link to={"/becomeconsultant"} className="navlinks">
        BECOME A CONSULTANT
      </Link>
      {/* <Link to={"/studio"} className="navlinks">
        MYGLAMY STUDIO
      </Link>
      <Link to={"/offers"} className="navlinks">
        OFFERS
      </Link> */}
    </div>
  );
};

export default Navbar;