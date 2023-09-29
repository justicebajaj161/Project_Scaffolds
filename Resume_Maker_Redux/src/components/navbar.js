

const Navbar = () => {
  

  return (
    <>
      <nav className="navbar">
        
              <NavLink to="/" activeClassName="active-link">Details</NavLink>
              <NavLink to="/resume" activeClassName="active-link">Resume</NavLink>
        

        <button className="navbar-toggler" >
          ☰
        </button>

    
              <NavLink to="/signin" activeClassName="active-link">Sign In</NavLink>
              <NavLink to="/signup" activeClassName="active-link">Sign Up</NavLink>
         
       
            <span onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</span>
          
      </nav>
   
    </>
  );
}

export default Navbar;
