import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Main = () => {
  // console.log(import.meta.env.VITE_apiKey)
  return (
    <div>
      <Navbar />
      <div className='pt-28 pb-20 min-h-[90vh]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;