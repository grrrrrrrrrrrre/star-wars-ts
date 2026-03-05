import {useContext} from "react";
import {StarWarsContext} from "../utils/context.ts";

const NavItem = ({itemTitle}:{itemTitle:string}) => {
    const {changePage} = useContext(StarWarsContext)

    return (
        <div onClick={() => changePage(itemTitle)} className={"bg-danger p-1 rounded-md"}>{itemTitle}</div>
    )
}

export default NavItem;