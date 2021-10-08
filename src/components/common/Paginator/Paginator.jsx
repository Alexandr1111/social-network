import React from "react";
import c from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);   // При totalUsersCount 19 и pageSize 5 не теряются последние пользователи
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => <span className={`${c.page} ${currentPage === p && c.selectedPage}`} onClick={() => onPageChanged(p)}>{p}</span>)}
        </div>
    )
}

export default Paginator;
