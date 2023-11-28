import React from 'react';
import {Pagination} from "@mui/material";

import "./paginator.css";

interface PropTypes {
    count: number;
    setPage: Function
}

const Paginator = ({count, setPage}:PropTypes) => {

    const handleChange = (event:any, value:number) => {
        setPage(value)
    }

    return (
        <div className="pagination">
            <Pagination count={count} color="primary" size="large" onChange={handleChange}/>
        </div>
    );
};

export default Paginator;