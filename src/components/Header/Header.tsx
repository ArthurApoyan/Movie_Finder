import React, {useState} from 'react';
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import GoBackButton from "../GoBackButton/GoBackButton";
import SearchPanel from "../SearchPanel/SearchPanel";
import useScreenSize from "../../hooks/useScreenSize";

import styles from "./header.module.css";
import MobileMenuIcon from "../../utils/icons/MobileMenuIcon";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {

    const screenSize:{width:number, height:number} = useScreenSize();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleButtonClick = ():void => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={styles.header}>
            <GoBackButton/>
            <Logo/>
            {screenSize.width >= 960 && <NavMenu/>}
            <SearchPanel/>
            {screenSize.width < 960 && <button className={styles.menuButton} onClick={handleButtonClick}><MobileMenuIcon/></button>}
            {isMenuOpen && <MobileMenu/>}
        </div>
    );
};

export default Header;