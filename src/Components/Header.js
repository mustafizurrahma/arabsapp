import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
export default class Header extends Component {

  state = {
    staticClass: "",
    newClass: false,
    activeNav: "home"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    if (window.pageYOffset > 100) {
      this.setState(() => ({ staticClass: "fixed-header" }));
    } else {
      this.setState(() => ({ staticClass: "" }));
    }
  };
  addClass = () => {
    this.setState((prevState) => ({
      newClass: !prevState.newClass,
    }));
  };
  addActive = () => {
    this.setState((prevState) => ({
      newClass: !prevState.newClass,
    }));
  };

 scrollToDiv =(type) =>{
      const yOffset = -200; 
      const element = document.getElementById(type);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({top: y, behavior: 'smooth'});
      this.setState(() => ({
        activeNav: type,
      }));
     }


  render() {
    return (
      <>
        <div
          className={`topbar d-flex align-items-center justify-content-between w-100 ${this.state.staticClass}`}
        >
          <Button
            variant="link"
            className={`p-0 menu-btn d-md-none d-flex ${
              this.state.newClass ? "active" : ""
            }`}
            onClick={() => {
              this.addClass();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Button>

          <div className="nav-menu d-flex align-items-center justify-content-between w-100" >
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <Link to="/" className="lgoBox">
                <Image src="/assets/i/logo.png" className="logo" />
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <div className="nav-linksbox d-md-flex align-items-center justify-content-between d-none">
                <ul className="d-flex align-items-center">
                  <li>
                    <a href="javascript:void(0)" onClick={()=>{this.scrollToDiv('home')}} className={this.state.activeNav == 'home' ? "active" : ''}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={()=>{this.scrollToDiv('story')}} className={this.state.activeNav == 'story' ? "active" : ''}>Story</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={()=>{this.scrollToDiv('faq')}} className={this.state.activeNav == 'faq' ? "active" : ''}>FAQ</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={()=>{this.scrollToDiv('roadmap')}} className={this.state.activeNav == 'roadmap' ? "active" : ''}>Roadmap</a>
                  </li>
                  <li>
                    <a href="http://twitter.com/thefirstarabs" className="iconsbox"> <Image src="/assets/i/tw.png"  /></a>
                  </li>
                  <li>
                    <a href="http://instagram.com/thefirstarabs" className="iconsbox"> <Image src="/assets/i/insta.png"  /></a>
                  </li>
                  <li>
                    <a href="https://discord.com/invite/8zRx9Z7cEM" className="iconsbox"> <Image src="/assets/i/discord.png"  /></a>
                  </li>
                  <li>
                    <a href="#" className="cta-btn">
                      Connect Wallet
                    </a>
                  </li>
                </ul>
              </div>
             
            </ScrollAnimation>
            <a href="#" className="cta-btn d-inline-block d-md-none mob-cta">
              Connect Wallet
            </a>
          </div>
        </div>

        <div
          className={`sidebar bg-white d-md-none d-block ${
            this.state.newClass ? "active" : ""
          }`}
        >
          <div className="nav-linksbox d-md-none align-items-center justify-content-between d-md-flex h-100">
            <ul>
              <li>
                <a
                  href="#"
                  className="active"
                  onClick={() => {
                    this.addActive();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={() => {
                    this.addActive();
                  }}
                >
                  Story
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => {
                    this.addActive();
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  onClick={() => {
                    this.addActive();
                  }}
                >
                  Roadmap
                </a>
              </li> 
            </ul>
              <ul className="d-flex justify-content-center">
              <li className="mx-2">
                    <a href="http://twitter.com/thefirstarabs" target="_blank" className="iconsbox"> <Image src="/assets/i/tw.png"  /></a>
                  </li>
                  <li  className="mx-2">
                    <a href="http://instagram.com/thefirstarabs" target="_blank" className="iconsbox"> <Image src="/assets/i/insta.png"  /></a>
                  </li>
                  <li  className="mx-2"> 
                    <a href="https://discord.gg/xP2UEkyj" target="_blank" className="iconsbox"> <Image src="/assets/i/discord.png"  /></a>
                  </li>
              </ul>
            <a href="#" className="cta-btn d-none">
              Connect Wallet
            </a>
          </div>
        </div>
      </>
    );
  }
}
