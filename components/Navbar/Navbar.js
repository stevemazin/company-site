import React from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <div>
          <Image src="/logo.svg" alt="Logo" width="60" height="60" />
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItems}>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li className={styles.navLinkItems}>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
