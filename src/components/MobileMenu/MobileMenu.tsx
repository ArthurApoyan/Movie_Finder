import React from 'react';
import {NavLink} from "react-router-dom";

import styles from "./mobileMenu.module.css";
const MobileMenu = () => {
    return (
        <div className={styles.mobileMenu}>
            <ul>
                <li><NavLink className={styles.mobileMenuLink} to="/popular">Popular</NavLink></li>
                <li><NavLink className={styles.mobileMenuLink} to="/topRated">Top Rated</NavLink></li>
                <li><NavLink className={styles.mobileMenuLink} to="/upcoming">Upcoming</NavLink></li>
                <li><NavLink className={styles.mobileMenuLink} to="/trending">Trending</NavLink></li>
            </ul>
        </div>
    );
};

export default MobileMenu;