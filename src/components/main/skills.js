import Skill from './skill';
import bootstrap from '../../img/bootstrap.png';
import css from '../../img/css.png';
import git from '../../img/git.png';
import html from './../../img/html.png';
import javascript from '../../img/javascript.png';


const Skills = () => {
    return ( 
        <section className="skills" id="skills">
            <h2>Skills</h2>
                <ul className="skills-list">
                    <Skill title='Html' img={html} />
                    <Skill title='Css' img={css} />
                    <Skill title='Bootstrap' img={bootstrap} />
                    <Skill title='Javascript' img={javascript} />
                    <Skill title = 'Git' img = {git} />
                </ul>
        </section>
     );
}
 
export default Skills;