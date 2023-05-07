import Stars from "./stars";

const Skill = (props) => {
    return ( 
          <li className="skills-list__item">
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
              <Stars />
          </li>
     );
}
 
export default Skill;