import photo from '../../img/my-photo.jpg';
import { NavLink } from 'react-router-dom';

const AboutMeUk = () => {
    return ( 
           <section className="main-info">
           <div className="main-info__wrapper">
              <h1>Ольга Козюк</h1>
              <p>фронтенд розробник, 37 років, Дніпро, Україна</p>
          <ul>
            <li><NavLink to="/portfolioUk"><a href="#" className="active">ук |</a></NavLink> </li>
             <li><NavLink to="/"><a href="#" >англ</a></NavLink> </li>
                
              </ul>
           </div>
            <img src={photo} alt="main-photo"/>
        </section>
      );
}
 
export default AboutMeUk;