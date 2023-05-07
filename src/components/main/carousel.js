import { useRef } from "react";
import prom1 from './../../img/Prometheus-first.jpg';
import prom2 from './../../img/Prometheus-second.jpg';
import ITEA from './../../img/ITEA.jpg';
export default function SimpleSlider() {
  const carusel = useRef();
  const slide = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  let counter = 0;

  const scrollRight = () => {
    if (counter >= 2) counter = 1;
    counter++;
    let diplomaWidht = carusel.current.clientWidth;
    slide.current.style = `transform: translateX(-${diplomaWidht * counter}px)`;
  }
  
  const scrollLeft = () => {
    if (counter <= 0) counter = 1;
    counter--;
    let diplomaWidht = carusel.current.clientWidth;
    slide.current.style = `transform:translateX(-${diplomaWidht * counter}px)`;
    
  }
  const makeSize = () => {
    let diplomaWidht = carusel.current.clientWidth;
    img1.current.style = `width: ${diplomaWidht}px`;
    img2.current.style = `width: ${diplomaWidht}px`;
    img3.current.style = `width: ${diplomaWidht}px`
   }
 

  return (
    <div className="diplomas__wrapper" onLoad={makeSize} onResize={makeSize}>
             <div className="carusel" ref={carusel} >
                <div className="carusel__slide"ref={slide}>
                    <img src={prom1} alt="Prometheus-first" ref={img1}/>
                    <img src={ITEA} alt="ITEA" ref={img2} />
                    <img src={prom2} alt="Prometheus-second" ref={img3}   />
                </div>
             </div>
               
              <div className="button-wrapper">
                    <button type="button" className="left-scroll"  onClick={scrollLeft}><i className="fa-solid fa-arrow-left"></i></button>
                    <button type="button" className="right-scroll"  onClick={scrollRight}><i className="fa-solid fa-arrow-right"></i></button>
              </div>
       </div>
    
  ); 
}

