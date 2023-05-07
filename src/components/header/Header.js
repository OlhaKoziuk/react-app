import { useState } from "react"
import "./head-style.css"
import close from '../../img/close.png';

const Header = () => {
    const [menu, setMenu] = useState(false);
    return ( 
           <header className="header" id="Home">
        <nav>
            <div className="burger" onClick={() => setMenu(!menu)}>  
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <ul className='nav'>
                <li><a href="#Home">Home</a></li>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#diplomas">Diplomas</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contacts">Contacts</a></li>
                </ul>
                
             <ul className={menu ? "new-nav" : "hidden"} onClick={() => setMenu(false)}>
                <li><img src={close} alt="close"/></li>
                <li><a href="#Home">Home</a></li>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#diplomas">Diplomas</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
            
        </nav>
    </header>
     );
}
 
export default Header;