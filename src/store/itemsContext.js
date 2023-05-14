import { createContext, useState } from "react";

export const ItmCxt = createContext(false);

export function ItmCxtProvider (props){
    const [ userItem, setUserItem] = useState(false);
    
    function setDeleteHndlr(){
        setUserItem(current => !current)
    }

    const context = {
        userIt: userItem,
        setDelete: setDeleteHndlr, 
    };

    return <ItmCxt.Provider value={context}>
        {props.children}
    </ItmCxt.Provider>
}

