import { useState } from "react";

function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    return (

    <nav className="nav-container flex flex-col bg-layout text-gold items-start md:items-end  fixed  w-full z-30">

          <div className="nav-menu flex flex-row items-center justify-between w-full  p-4 md:hidden">
             <button className="xl:hidden text-xl " onClick={toggleMenu} id="menu-open" aria-label="Open navegation menu">☰</button>

            <div className="icon-container-mobile">
              <img src="/favicon.svg" className="w-10 h-10"/>
            </div>
          </div>








        <ul className={`nav-ul ${isOpen ? 'flex-col' : 'hidden'} w-full md:flex md:flex-row md:justify-end p-3 md:text-lg`} id="nav">
            <div className="icon-container hidden md:flex md:mr-auto">
              <img src="/favicon.svg" className="w-10 h-10 md:w-12 md:h-12"/>
            </div>

          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu}  className="hover:text-darkgold transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#">Home</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="hover:text-darkgold transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#about">About us</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="hover:text-darkgold transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#whychoose">Why choose us</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="hover:text-darkgold transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#clients">Clients</a></li>
          <li className="p-6 pl-4 md:p-4 font-semibold"><a onClick={toggleMenu} className="hover:text-darkgold transition ease-in lg:px-6 lg:py-2 lg:rounded-3xl" href="#contact">Contact</a></li>
        </ul>     
    </nav>

    )
}

export default Nav