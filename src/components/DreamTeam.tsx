import Friend from "./Friend.tsx";
import {friends} from "../utils/constants.ts";

const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 border border-warning rounded-b-3xl grid grid-cols-3 mt-2 ml-2">
            <h2 className="col-span-3 text-center">Dream team</h2>
            {friends.map((friend, i) => <Friend friend={friend} key={friend} pos={i + 1}/>)}
        </section>
    )
}

export default DreamTeam;