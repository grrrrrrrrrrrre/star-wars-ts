import OpeningCrawl from "./OpeningCrawl.tsx";
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const Home = () => {
    const {heroId = defaultHero} = useParams()
    const {changeHero} = useContext(SWContext);

    useEffect(() =>
    {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
    }, [])
    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    )
}

export default Home;