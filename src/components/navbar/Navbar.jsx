import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
// import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        {/* <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}> */}
         <span>Harsh Bhadouriya</span>
        {/* </motion.span> */}
        <div className="social">
          <a href="#"><img src="/x.jpg" alt="Social Media 1" /></a>
          <a href="#"><img src="/linkdn.png" alt="LinkedIn" /></a>
          <a href="#"><img src="/gihub.png" alt="GitHub" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;