import "./foot-style.css";
import facebook from '../../img/facebook.png';
import insta from '../../img/insta.png';
import linkedin from '../../img/linkedin.png';


const FooterUk = () => {
    return ( 
         <footer className="footer" id="contacts">
        <h2>Контакти</h2>
        <p>Хочете дізнатися більше, або просто поспілкуватися? Ласкаво прошу!</p>
        <button type="button"><a href="mailto:gadyakaban@gmail.com">Надіслати повідомлення</a></button>
        <ul>
            <li><a href=""><img src={linkedin} alt="linkedin"/></a></li>
            <li><a href=""><img src={insta} alt="insta"/></a></li>
            <li><a href=""><img src={facebook} alt="facebook"/></a></li>
        </ul>
        <p>Буду вдячна за вподобайки LinkedIn, Instagram, Facebook</p>
      </footer>
     );
}
 
export default FooterUk;