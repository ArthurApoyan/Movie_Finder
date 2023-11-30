import React from 'react';
import movieFinderLogo from "../../utils/images/movieFinderLogoImage.png"
import {Link} from "react-router-dom";

import styles from "./logo.module.css";

const Logo = () => {
    return (
        <Link className={styles.logoLink} to="/">
            <div className={styles.logo}>
                <img src={movieFinderLogo} alt="logo"/>
            </div>
        </Link>
    );
};

export default Logo;