import star from '../../img/Star.png';
import white from '../../img/white-star.png';

const Stars = () => {
    return (  
         <ul>
            <li><img src={star} alt="star"/></li>
            <li><img src={star} alt="star"/></li>
            <li><img src={star} alt="star"/></li>
            <li><img src={star} alt="star"/></li>
            <li><img src={white} alt="white-star"/></li>
         </ul>
    );
}
 

export default Stars; 