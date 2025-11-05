"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Menu from "./menubtn/Menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Get current path to pass as 'from' state when navigating to About
  // const currentPath = location.pathname;

  return (
    <div className="top-0 right-0 ">
      <div onClick={toggleDrawer} className="m-4 font-bank  text-black">
        <Menu />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 right-0 h-full w-[300px] rounded-l-3xl z-50"
            onMouseLeave={toggleDrawer}
          >
            <button
              onClick={toggleDrawer}
              className="absolute top-2 right-2 text-2xl text-black hover:text-red-600"
            >
              <IoMdClose />
            </button>

            <ul className="menu text-base-content w-full bg-white/70 p-4! pl-2! pr-6!  space-y-2">
              <li>
                <Link to="/" onClick={toggleDrawer}>
                  Home
                </Link>
              </li>
              <li>
                {/* Pass currentPath as 'from' state */}
                <Link
                  to="/about"
                  // state={{ from: currentPath }}
                  onClick={toggleDrawer}
                >
                  About us
                </Link>
              </li>
              <li>
                <details>
                  <summary className="list-none text-black cursor-pointer">
                    Services
                  </summary>
                  <ul className="pl-4 space-y-1">
                    <li>
                      <Link to="/digital-soln" onClick={toggleDrawer}>
                        Digital Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="/prop-mgmt" onClick={toggleDrawer}>
                        Property Management
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/contact" state={{ from: location.pathname }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
