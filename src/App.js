import Start from "./components/Start";
import Game from "./components/Game";

import {useSelector} from "react-redux";

const App = () => {

   const fullName = useSelector(state => state.fullName)

    if (!fullName) {
        return <Start/>
    } else {
        return <Game/>
    }
};

export default App;


