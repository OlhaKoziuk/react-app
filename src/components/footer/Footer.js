import "./foot-style.css";
import facebook from '../../img/facebook.png';
import insta from '../../img/insta.png';
import linkedin from '../../img/linkedin.png';


const Footer = () => {
    return ( 
         <footer className="footer" id="contacts">
        <h2>Contacts</h2>
        <p>Want to know more or just chat?
        You are welcome!</p>
        <button type="button"><a href="mailto:gadyakaban@gmail.com">Send message</a></button>
        <ul>
            <li><a href=""><img src={linkedin} alt="linkedin"/></a></li>
            <li><a href=""><img src={insta} alt="insta"/></a></li>
            <li><a href=""><img src={facebook} alt="facebook"/></a></li>
        </ul>
        <p>Like me on LinkedIn, Instagram, Facebook</p>
      </footer>
     );
}
 
export default Footer;