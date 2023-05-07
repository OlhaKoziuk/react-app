import finsweet from '../../img/finsweet.jpg';

const PortfolioUk = () => {
    return (  
         <section className="portfolio" id="portfolio">
            <h2>Портфоліо</h2>
            <img src={finsweet} alt="finsweet"/>
            <a target="_blank" rel="noopener noreferrer" href="https://buffi4ka.github.io/Finsweet/">Finsweet landing</a>
        </section>
    );
}
 
export default PortfolioUk;