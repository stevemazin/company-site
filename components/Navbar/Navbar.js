import React from "react";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <div>
          <Image src="/assets/logo.svg" alt="Logo" width="60" height="60" />
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItems}>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
            >
              Contact Us
            </Link>
          </li>
          <li className={styles.navLinkItems}>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="services"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
