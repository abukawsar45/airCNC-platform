import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Main = () => {
  // console.log(import.meta.env.VITE_apiKey)
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default Main;