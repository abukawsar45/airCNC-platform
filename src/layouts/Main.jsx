import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Main = () => {
  // console.log(import.meta.env.VITE_apiKey)
  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-20">
        <Outlet/>
      </div>
    </div>
  );
};

export default Main;