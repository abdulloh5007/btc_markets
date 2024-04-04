import { Button } from "@mui/material"
import Logo from '../../assets/logo.svg';
import "./Navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#"><img src={Logo} alt="Logo" /></a>
      </div>
      <div className="navbar__center">
        <a href="#">Products</a>
        <a href="#">Prices</a>
        <a href="#">Buy</a>
        <a href="#">OTC</a>
        <a href="#">Learn</a>
        <a href="#">Help</a>
      </div>
      <div className="navbar__right">
        <a href="#"><Button className="btn login" variant="outlined">Log In</Button></a>
        <a href="#"><Button className="btn signup" variant="contained">Sign Up</Button></a>
      </div>
    </div>
  )
}

export default Navbar