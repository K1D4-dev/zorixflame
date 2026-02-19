import { NavLink } from "react-router-dom";

import styles from './Header.module.css';

import logo from "@/assets/images/logo.svg";
import searchIcon from "@/assets/icons/search.svg";
import bagIcon from "@/assets/icons/bag.svg";

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.active : ""}`;

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <NavLink to={"/"}>
                    <img src={logo} alt="Zorixflame" /></NavLink>
            </div>

            <nav className={styles.nav}>
                <NavLink to="/" end className={getLinkClass}>
                    <span>Головна</span></NavLink>
                <NavLink to="/catalog" end className={getLinkClass}>
                    <span>Каталог</span></NavLink>
                <NavLink to="/about"end className={getLinkClass}>
                    <span>Про нас</span></NavLink>
                <NavLink to="/contacts"end className={getLinkClass}>
                    <span>Контакти</span></NavLink>
            </nav>

            <div className={styles.icons}>

                <img src={searchIcon} alt="search" />
                <NavLink to={"/bag"}>
                    <img src={bagIcon} alt="bag" /></NavLink>
            </div>
        </header>
    );
};

export default Header;