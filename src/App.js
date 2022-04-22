import "./App.css";
import Logo from "./purple_cup_lounge_logo.jpg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row top">
            <div className="col-xl-5 logo">
              <img src={Logo} alt="Logo"></img>
            </div>
            <div className="col-xl-7 text">
              <h1>Purple Cup Lounge</h1>
              <h2>Seattle's First Dry Bar</h2>
              <h3>Coming Soon!</h3>
            </div>
          </div>
          <div className="row bottom">
            <div className="col-2"></div>
            <div className="col tagline">
              <h4>
                Purple Cup Lounge is a place where you can enjoy all that bars
                have to offer - all 100% alcohol-free!
              </h4>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </header>
    </div>
  );
}
