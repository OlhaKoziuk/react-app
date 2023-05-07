import photo from '../../img/my-photo.jpg';
import { NavLink } from 'react-router-dom';

const AboutMe = () => {
    return ( 
           <section className="main-info">
           <div className="main-info__wrapper">
              <h1>Olha Koziuk</h1>
              <p>frontend developer, 37 years old, Dnipro, Ukraine</p>
           <ul>
             <li><NavLink to="/portfolioUk"><a href="#">ua |</a></NavLink> </li>
             <li><NavLink to="/"><a href="#" className="active">eng</a></NavLink> </li>
                
              </ul>
           </div>
            <img src={photo} alt="main-photo"/>
        </section>
      );
}
 
export default AboutMe;