import RouteMain from "../../routes/Routes";
import NavBar from "../Navbar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-rootContainer">
      <div className="home-mainContainer">
        <NavBar />
        <div className="home-chatContainer">
          <RouteMain />
        </div>
      </div>
    </div>
  );
};

export default Home;
