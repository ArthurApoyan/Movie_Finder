import React from 'react';
import {useNavigate} from "react-router";

import styles from "./goBackButton.module.css";
import useScreenSize from "../../hooks/useScreenSize";

const GoBackButton = () => {

    const navigate = useNavigate();
    const screenSize:{width:number, height:number} = useScreenSize();

    return (
        <div>
           <button className={styles.goBack} onClick={() => navigate(-1)}>← {screenSize.width >= 960 && "Back"}</button>
        </div>
    );
};

export default GoBackButton;