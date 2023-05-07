import "./main-style.css";
import SkillsUk from './skillsUk';
import AboutMeUk from './aboutMeUk';
import PortfolioUk from './portfolioUk';
import DiplomasUk from './diplomasUk';


const MainUk = () => {
    return ( 
        <main>
          <AboutMeUk  />
          <DiplomasUk />
          <SkillsUk />
          <PortfolioUk />
         </main>
     );
}
 
export default MainUk;