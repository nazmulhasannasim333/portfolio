import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1000);
  // }, []);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
    
  }, []);
  return (
    <div className="overflow-hidden">
         <Navbar />
         <Outlet />
         <Footer />
    </div>
  );
};

export default Main;
