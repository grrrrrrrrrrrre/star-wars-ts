import {useContext} from "react";
import {StarWarsContext} from "../utils/context.ts";
import Button from "../ui_elements/button.tsx";

const NavItem = ({itemTitle}:{itemTitle:string}) => {
    const {changePage} = useContext(StarWarsContext)

    return (
        <Button text={itemTitle} func={() => changePage(itemTitle)} style={"bg-danger border p-1 rounded-md hover:bg-red-500 hover:text-white"}/>
    )
}

export default NavItem;