import React, {FC, useState} from "react";
import c from "./Paginator.module.css";
import {Pagination} from "@mui/material";

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (e: any, pageNumber: number) => void
    portionSize?: number
}

const Paginator: FC<Props> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);   // При totalUsersCount 19 и pageSize 5 не теряются последние пользователи
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);// в локальном, т.к. это чисто ui-момент
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={c.paginator}>

            <Pagination
                showFirstButton
                showLastButton
                color="primary"
                siblingCount={0}
                page={currentPage}
                count={pagesCount}
                onChange={onPageChanged}

            />

            {/*{portionNumber > 1 &&*/}
            {/*<button onClick={() => setPortionNumber(portionNumber - 1)}>*/}
            {/*    PREV*/}
            {/*</button>}*/}
            {/*{pages*/}
            {/*    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)*/}
            {/*    .map(p => <span className={`${c.page} ${currentPage === p && c.selectedPage}`} onClick={() => onPageChanged(p)}>{p}</span>)}*/}
            {/*{portionCount > portionNumber &&*/}
            {/*<button onClick={() => setPortionNumber(portionNumber + 1)}>*/}
            {/*    NEXT*/}
            {/*</button>}*/}
        </div>
    )
}

export default Paginator;
