import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface Props {
    friend: string;
    pos: number;
    alt: string;
    change: string
}

const Friend = ({friend, pos, alt, change}: Props) => {
    const {changeHero} = useContext(SWContext)

    let styles = "w-full";
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }
    return (
        <img onClick={() => {
            changeHero(change)
        }} className={styles} src={friend} alt={alt}/>
    )
}

export default Friend;