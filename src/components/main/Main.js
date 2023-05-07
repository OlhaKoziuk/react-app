import "./main-style.css";
import Skills from './skills';
import AboutMe from './aboutMe';
import Portfolio from './portfolio';
import Diplomas from './diplomas';


const Main = () => {
    return ( 
        <main>
          <AboutMe  />
          <Diplomas />
          <Skills />
          <Portfolio />
         </main>
     );
}
 
export default Main;