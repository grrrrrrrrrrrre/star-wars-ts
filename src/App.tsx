import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);
    const [valid, setValid] = useState<boolean>(false);

    return (
        <div className={'mx-2'}>
            <SWContext value={{hero, changeHero: setHero, valid, changeValid: setValid}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App
