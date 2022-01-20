import React from "react";
import Link from "next/link";
import NavbarLinks from "./NavLinks";
import DropdownMenu from "components/Dropdowns/DropdownMenu";
import { aboutUsMenu, servicesFacilities, doctors, patients } from "constants/navbarmenu";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function PageNavbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg nav-bg-green-grad shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto lg:static lg:block lg:justify-start mr-7">
            {/* <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start mr-7"> */}
            <Link href="/">
              <a className="text-white-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" >
                ACEMC-BOHOL
              </a>
            </Link>
            <MobileView>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block  outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </MobileView>
          </div>
          <div
            className={
              // "items-center  bg-opacity-0 shadow-none " +
              "md:flex flex-grow items-center  md:bg-opacity-0 md:shadow-none " +
              // "lg:flex flex-grow items-center  lg:bg-opacity-0 lg:shadow-none " +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <DropdownMenu title="About Us" icon="fas fa-file-alt" menus={aboutUsMenu} />
            {/* <DropdownMenu title="Services and Facilities" icon="fas fa-stethoscope" menus={servicesFacilities} /> */}
            <NavbarLinks title="Services" icon="fas fa-newspaper" link={'/services'} />
            <NavbarLinks title="Doctors" icon="fas fa-newspaper" link={'/doctors'} />
            <DropdownMenu title="Patients and Visitors Guide" icon="fas fa-hospital-user" menus={patients} />
            <NavbarLinks title="News and Events" icon="fas fa-newspaper" link={'/news-events'} />


            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {/* <IndexDropdown /> */}
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-white-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  // className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/acebohol/"
                  target="_blank"
                >
                  <i className="text-white-700 fab fa-facebook text-lg leading-lg " />
                  {/* <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " /> */}
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
