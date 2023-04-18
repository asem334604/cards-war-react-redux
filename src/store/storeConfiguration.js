import {createStore} from "redux";
import {cardsWarReducer} from "../reducers/cardsWarReducer";

export const initialState = {
    fullName: '',
    game: {
        isGameEnded: false,
        isGameStarted: false
    },
    stats: {
        games: 0,
        wins: 0,
        looses: 0
    }
};

const store = createStore(cardsWarReducer, initialState);

export default store;

