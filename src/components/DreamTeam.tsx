import Friend from "./Friend.tsx";
import {characters, friends} from "../utils/constants.ts";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";

const DreamTeam = () => {
    const {hero} = useContext(SWContext);
    return (
        <section className="float-right w-1/2 border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2">
            <h2 className="col-span-3 text-center text-2xl">Dream team</h2>
            {friends
                .filter(friend => friend !== hero)
                .map((friend, i) => <Friend
                    friend={characters[friend].img}
                    key={characters[friend].img}
                    alt={characters[friend].name}
                    change={friend}
                    pos={i + 1}/>)
            }
        </section>
    )
}

export default DreamTeam;