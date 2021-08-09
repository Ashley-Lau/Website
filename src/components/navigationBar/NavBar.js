import react, {useState} from 'react'
import "./NavBar.css"
import { AiFillAlert } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';


const Navbar = () => {
  const [isClose, setIsClose] = useState(false)
  const [buttonColor, setButtonColor] = useState("white")

  window.addEventListener("scroll", () => {
    window.scrollY > 0 ? setButtonColor("black") : setButtonColor("white")
    setIsClose(false)
  })

  const handleClick = () => {
    setIsClose(!isClose)
  }
  return (
    <nav className="nav-bar">
      <div className="nav-bar-logo-container">
        <AiFillAlert className="logo"/>
        <a href="#homePage"> Ashley </a>
      </div>
      <div className= {isClose ? window.scrollY > 0 ?
                                    "nav-links-container sticky"
                                    : "nav-links-container active"
                                : "nav-links-container"}>
        <a href="#homePage"> Home </a>
        <a href="#aboutPage"> About </a>
        <a href="#projectPage"> Projects</a>
        <a href="#contactPage"> Contact </a>
      </div>
      {isClose ? <CgClose className="resize-logo"
                          color = {buttonColor} onClick={handleClick}/>
        : <GoThreeBars className="resize-logo"
                       color = {buttonColor} onClick={handleClick}/>}
    </nav>
  )
}

export default Navbar;