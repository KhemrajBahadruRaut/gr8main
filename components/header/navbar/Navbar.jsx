"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
// import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 768;

      if (!isDesktop) {
        setShowHeader(true); // Always show on mobile
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // scrolling down on desktop
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true); // scrolling up on desktop
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // handle device resizing
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  const handleLogoClick = () => {
    const currentPath = location.pathname;
    const from = location.state?.from || "/";

    if (currentPath === "/about" || currentPath === "/contact") {
      navigate(from);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="">

    <div
      className={`fixed 2xl:mx-auto 2xl:container top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between">
        {/* Logo */}
        <div
          className="pl-2 pt-2 "
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/mainlogo/GR8-Nepal-Private-Limited-Logo.webp"
            onClick={handleLogoClick}
            className="cursor-pointer h-8 md:h-14 lg:h-18 max-w-full object-contain"
            alt="gr8-Nepal-Private-Limited-Logo"
            title="gr8-Nepal-Private-Limited"
          />
        </div>

        {/* Right Side */}
        <div className="flex justify-end items-center gap-4">
          {/* Desktop Only */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Icons (hide when sidebar is open) */}
            {!isSidebarOpen && (
              <div className="flex gap-2">
                {[
                  {
                    icon: <FaFacebookF className="text-[15px] text-black" />,
                    link: "https://www.facebook.com/gr8nepal/",
                    svg: "/icons/GR8-Nepal-fb.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                  {
                    icon: <FaInstagram className="text-[15px] text-black" />,
                    link: "https://www.instagram.com/gr8nepal/",
                    svg: "/icons/GR8-Nepal-ig.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                  {
                    icon: <FaYoutube className="text-[15px] text-black" />,
                    link: "https://www.youtube.com/@GR8Nepal/",
                    svg: "/icons/GR8-Nepal-yt.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                  {
                    icon: <FaTiktok className="text-[15px] text-black" />,
                    link: "https://www.tiktok.com/@gr8nepal/",
                    svg: "/icons/GR8-Nepal-tt.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                  {
                    icon: <FaLinkedinIn className="text-[15px] text-black" />,
                    link: "https://www.linkedin.com/company/gr8-private-limited",
                    svg: "/icons/GR8-Nepal-li.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group perspective"
                    title="gr8-Nepal-Private-Limited"
                    alt="gr8-Nepal-Private-Limited"
                  >
                    <div className="relative w-9 h-9 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                      <div className="absolute w-full h-full flex items-center justify-center backface-hidden">
                        <div className="border border-black rounded-full p-2">
                          {item.icon}
                        </div>
                      </div>
                      <div className="absolute w-full h-full flex items-center justify-center rotate-y-180 backface-hidden">
                        <div className="rounded-full">
                          <img
                            src={item.svg}
                            alt={item.alt || "GR8 Nepal Social Icon"}
                            title={item.title || "GR8 Nepal Social Icon"}
                            className="size-7"
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Sidebar Trigger */}
            <Sidebar
            isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <HiX
                className="text-3xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <HiMenu
                className="text-3xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-lg p-6 absolute z-40 top-full left-0">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                state={{ from: location.pathname }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <details>
                <summary className="list-none">Services</summary>
                <ul className="pl-6 pt-2 space-y-2">
                  <li>
                    <Link to="/digital-soln">- Digital Solution</Link>
                  </li>
                  <li>
                    <Link to="/prop-mgmt">- Property Management</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/connect"
                className="border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let’s Connect
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
    </div>

  );
};

export default Navbar;
