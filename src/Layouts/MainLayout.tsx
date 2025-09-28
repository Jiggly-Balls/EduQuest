import { Outlet } from "react-router-dom";

import CardNav from "../Componenets/CardNav";
import logo from "../assets/FTF.png";

import "../Styles/Layouts/MainLayout.css";

const items = [
  {
    label: "About",
    bgColor: "#212121",
    textColor: "#fff",
    links: [
      {
        label: "Home Page",
        href: "#/",
        ariaLabel: "Home Page",
      },
      {
        label: "Our Mission",
        href: "#/our-mission",
        ariaLabel: "About us",
      },
    ],
  },
  {
    label: "Courses",
    bgColor: "#212121",
    textColor: "#fff",
    links: [
      {
        label: "Python",
        href: "#/courses/python",
        ariaLabel: "Python Course",
      },
      {
        label: "All Courses",
        href: "#/courses",
        ariaLabel: "All Courses",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: "#212121",
    textColor: "#fff",
    links: [
      { label: "Email", href: "https://google.com", ariaLabel: "Email us" },
      { label: "Twitter", href: "https://google.com", ariaLabel: "Twitter" },
    ],
  },
];

function MainLayout() {
  return (
    <>
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#ff7043"
        menuColor="#d0a4ffff"
        buttonBgColor="#000000ff"
        buttonTextColor="#fff"
        ease="power3.out"
        buttonLink="#/map"
      />
      <div id="nav-margin" />
      <main>
        <Outlet />
      </main>
      <div id="post-page" />
    </>
  );
}

export default MainLayout;
