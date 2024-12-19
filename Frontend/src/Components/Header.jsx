import React from "react";

const Header = () => {
  return (
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      
        
    </div>
    <a href="/Home"className="btn btn-ghost text-xl">SE NPRU Blog</a>
  </div>
  
 <div className="navbar-end flex space-x-4">
  <a href="/Login" className="btn btn-outline btn-accent">
    Login
  </a>
  
  <a href="/Register" className="btn btn-outline btn-secondary">Register</a>
   
</div>



</div>
  );
};

export default Header;