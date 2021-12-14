import { Route, Routes } from "react-router";
import BotChat from "../components/BotChat/BotChat";

const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<BotChat />} />
    </Routes>
  );
};

export default RouteMain;
