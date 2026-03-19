import {characters, defaultHero} from "../../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../../utils/context.ts";

export const useValidHero = () => {
    const {heroId = defaultHero} = useParams()
    const {changeHero, changeValid} = useContext(SWContext);

    useEffect(() =>
    {
        if (!(heroId in characters)) {
            changeValid(false);
            return;
        }
        changeValid(true)
        changeHero(heroId);
    }, [heroId, changeHero, changeValid])

    return {
        heroId,
        isHeroValid: heroId in characters
    }
}