import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from './Navbar.module.scss';

const MENU_LIST = [
  { text: "Marketplace", href: "/marketplace" },
  { text: "Ranking", href: "/ranking" },
  { text: "Connect a wallet", href: "/connect_wallet" },
  { text: "Sign up", href: "/sign_up", isButton: true, icon: true },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.title}>
          <img src='https://svgshare.com/i/qNQ.svg' title='' />
        </Link>
        <div className={`${navActive ? styles.active : ""} ${styles.nav__menu_list}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menu_bar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;