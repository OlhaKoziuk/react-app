import "./styles/reset.css";
import "./styles/style.css";
import PortfolioEng from "./components/portfolio/portfolioEng";
import PortfolioUk from './components/portfolio/portfolioUk';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> <Route path="/" element={<PortfolioEng />}></Route> </Routes>
        <Routes> <Route path="/portfolioUk" element={<PortfolioUk />}></Route> </Routes>  
      </Router>
    </div>
  );
}

export default App;


