import React from "react";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },

  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav>
      {/*_____ Logo section _____ */}
      <div>
        <a href="#">
          Playing/ <span>Market</span>
        </a>
      </div>
      {/*_____ Menu section _____ */}
      <div>
        <ul>
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {/*_____ Mobil Hamburger section _____ */}
      <div></div>
    </nav>
  );
};

export default Navbar;
