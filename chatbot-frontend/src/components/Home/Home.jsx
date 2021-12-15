import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import BotChat from "../BotChat/BotChat";
import "./Home.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("botchat");
  return (
    <div className="home-rootContainer">
      <div className="home-mainContainer">
        <NavBar />
        <div className="home-chatContainer">
          {currentPage === "botchat" && <BotChat />}
        </div>
      </div>
    </div>
  );
};

export default Home;
