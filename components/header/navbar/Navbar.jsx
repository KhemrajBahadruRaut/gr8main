"use client";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(true);


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


  return (
    <div className=" ">
      <div
        className={`fixed 2xl:mx-auto 2xl:container top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between  md:px-20 pb-1 backdrop-blur-sm">
          {/* Logo */}
          <div
            className="pl-2 pt-2 "
            style={{ cursor: "pointer" }}
          >
            <img
              src="/mainlogo/GR8-Nepal-Private-Limited-Logo.webp"
              className="cursor-pointer h-8 md:h-14 lg:h-18 max-w-full object-contain"
              alt="gr8-Nepal-Private-Limited-Logo"
              title="gr8-Nepal-Private-Limited"
            />
          </div>

          {/* Right Side */}
          <div className="flex justify-end items-center gap-4">
            {/* Desktop Only */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex gap-2">
                {[
                  {
                    icon: <FaFacebookF className="text-[15px] text-white" />,
                    link: "https://www.facebook.com/gr8nepal/",
                    svg: "/icons/GR8-Nepal-fb.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                  {
                    icon: <FaInstagram className="text-[15px] text-white" />,
                    link: "https://www.instagram.com/gr8nepal/",
                    svg: "/icons/GR8-Nepal-ig.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                  {
                    icon: <FaYoutube className="text-[15px] text-white" />,
                    link: "https://www.youtube.com/@GR8Nepal/",
                    svg: "/icons/GR8-Nepal-yt.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                  {
                    icon: <FaTiktok className="text-[15px] text-white" />,
                    link: "https://www.tiktok.com/@gr8nepal/",
                    svg: "/icons/GR8-Nepal-tt.webp",
                    title: "gr8-Nepal-Private-Limited",
                    alt: "gr8-Nepal-Private-Limited",
                  },
                  {
                    icon: <FaLinkedinIn className="text-[15px] text-white" />,
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
                    <div className="relative w-9 h-9 transition-transform duration-500 transform-style-preserve-3d group-hover:transform-[rotateY(180deg)]">
                      <div className="absolute w-full h-full flex items-center justify-center backface-hidden">
                        <div className="border border-white rounded-full p-2">
                          {item.icon}
                        </div>
                      </div>
                      <div className="absolute w-full h-full flex items-center justify-center backface-hidden transform-[rotateY(180deg)]">
                        <div className="rounded-full">
                          <img
                            src={item.svg}
                            alt={item.alt || "GR8 Nepal Social Icon"}
                            title={item.title || "GR8 Nepal Social Icon"}
                            className="size-7"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
              <div>
      <button className="learn-more rounded-3xl ">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow "></span>
        </span>
        <p className="button-text flex justify-center items-center ">Menu</p>
      </button>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
