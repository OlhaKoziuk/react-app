import finsweet from '../../img/finsweet.jpg';

const Portfolio = () => {
    return (  
        <section className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <img src={finsweet} alt="finsweet"/>
            <a target="_blank" rel="noopener norefferrer"  href="https://buffi4ka.github.io/Finsweet/">Finsweet landing</a>
        </section>
    );
}
 
export default Portfolio;