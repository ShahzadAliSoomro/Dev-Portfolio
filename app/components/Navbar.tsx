"use client";
import React, { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";
import Link from "next/link";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");
  const [activeNavItem, setActiveNavItem] = useState(""); // State to track active navigation item

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavItemClick = (label: any) => {
    setActiveNavItem(label); // Set the clicked navigation item as active
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarBgColor("white");
    } else {
      setNavbarBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full transition-all duration-300
    ${navbarBgColor === "white" ? "bg-white opacity-80" : "bg-transparent"}`}
      style={{ zIndex: 100 }}
    >
      <div className="max-w-[1440px] mx-auto py-4 lg:px-10 px-0">
        <div
          className={`md:hidden pr-3 flex justify-end ${
            navbarBgColor === "white" ? "text-black" : "text-white"
          }`}
        >
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="labeldiv"
          aria-label="Toggle Mobile Menu" >
            
            <AiOutlineMenu className="w-8 h-8" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div
            className={`text-lg font-semibold ${
              navbarBgColor === "white" ? "text-black" : "text-white"
            }`}
          >
            <Link href="/">
              <p className="-my-7 lg:my-0 pl-3 lg:pl-0">DevShahzad</p>
            </Link>
          </div>
          <div className="hidden md:flex gap-6 font-semibold">
            <NavItem
              icon={<AiOutlineHome />}
              label="Home"
              link="/"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
            <NavItem
              icon={<AiOutlineUser />}
              label="About"
              link="/about"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
            <NavItem
              icon={<AiOutlineFundProjectionScreen />}
              label="Project"
              link="/project"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
            <NavItem
              icon={<BiSortDown />}
              label="Resume"
              link="/public/ShahzadAli.pdf"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
            <NavItem
              icon={<AiOutlineContacts />}
              label="Contact"
              link="/contact"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed top-12 left-end w-full bg-slate-800">
          <div className="mt-2 py-2 px-4 rounded flex flex-col gap-2 text-xl">
            <NavItem
              icon={<AiOutlineHome />}
              label="Home"
              link="/"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
            <NavItem
              icon={<AiOutlineUser />}
              label="About"
              link="/about"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
            <NavItem
              icon={<AiOutlineFundProjectionScreen />}
              label="Project"
              link="/project"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
            <NavItem
              icon={<BiSortDown />}
              label="Resume"
              link="/"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
            <NavItem
              icon={<AiOutlineContacts />}
              label="Contact"
              link="/contact"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
          </div>
        </div>
      )}
    </div>
  );
}

function NavItem({
  icon,
  label,
  link,
  navbarBgColor,
  activeNavItem,
  handleNavItemClick,
}: any) {
  const navItemClassName = `flex gap-1 items-center cursor-pointer transition duration-300 ${
    navbarBgColor === "white" ? "text-black" : "text-white"
  } ${activeNavItem === label ? "border-b-2 border-blue-500" : ""}`; // Add border class for active item
  const navItemStyle = {
    backgroundColor:
      navbarBgColor === "white" ? "rgba(255, 255, 255, 0.1)" : "transparent",
  };

  // Check if the link is for the resume PDF
  const isResumeLink = link === "/public/ShahzadAli.pdf";

  if (isResumeLink) {
    return (
      <div className={navItemClassName} style={navItemStyle}>
        <a
          href={link}
          download="ShahzadAli.pdf" // Set the download attribute
          className="flex gap-1 items-center" // No need for hover styles for direct download links
          style={navItemStyle}
        >
          {icon}
          <p
            className={navbarBgColor === "white" ? "text-black" : "text-white"}
          >
            {label}
          </p>
        </a>
      </div>
    );
  } else {
    // For other links, use the original Link component
    return (
      <div
        className={navItemClassName}
        style={navItemStyle}
        onClick={() => handleNavItemClick(label)} // Handle click to change active item
      >
        <Link href={link}>
          <div className="flex gap-1 items-center">
            {icon}
            <p
              className={
                navbarBgColor === "white" ? "text-black" : "text-white"
              }
            >
              {label}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
