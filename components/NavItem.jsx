import Link from "next/link";
import styles from './Navbar.module.scss';


const NavItem = ({ text, href, active, isButton, icon }) => {
  return (
    <Link
      href={href}
      className={`${isButton ? "button " + styles.nav__button : styles.nav__item} ${ active ? styles.active: ""}`}>
      {(isButton && icon)&&<img src='https://svgshare.com/i/qNj.svg' title='' />}
      {text}
    </Link>
  );
};

export default NavItem;
