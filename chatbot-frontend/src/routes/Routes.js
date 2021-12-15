import { Route, Routes } from "react-router";
import Home from "../components/Home/Home";

const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouteMain;
