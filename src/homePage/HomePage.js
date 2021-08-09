import react, {} from "react"
import MainBackground from "../resources/MainBackground.jpg"
import "./index.css"

// Main background picture source: https://wallpapersafari.com/w/RjkgQU

const HomePage = () => {

  return (
    <div id="home-page">
      <img className="main-background-image" src={MainBackground} alt="none"/>
      <div className="home-page-context">
        <span>Hi there! I'm</span>
        <span>Ashley Lau</span>
        <span> and I am an aspiring fullstack engineer who loves sports!</span>
      </div>
    </div>
  )
};

export default HomePage;