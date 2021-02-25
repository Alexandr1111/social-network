import React, { createContext } from "react";

const StoreContext = createContext(null);

export const Provider = (props) => {   // Дайте через пропсы стор и она присобачит к value.
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;
