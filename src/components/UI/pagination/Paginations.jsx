import React from 'react';
import MyButton from "../buttons/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Paginations = ({page, changePage, totalPages}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="pagesButtons">
            {
                pagesArray.map(p =>
                    <MyButton
                        onClick={() => changePage(p)}
                        className={page === p && "page__current"}
                        key={p}
                    >
                        {p}
                    </MyButton>
                )
            }
        </div>
    );
};

export default Paginations;