import {LOGIN_USER} from "../actions/loginActions";
import {COMP_WINS_STATS, END_GAME, PLAYER_WINS_STATS} from "../actions/gameActions";
import {initialState} from "../store/storeConfiguration";

export const cardsWarReducer = (
    state = initialState,
    action) => {
    switch (action.type) {
        case (LOGIN_USER): {
            const res = action.payload;
            return {...state, fullName: res}
        }
        case (END_GAME): {
            const game = {...state.game};
            game.isGameEnded = action.payload;
            return {...state, game};
        }
        case (PLAYER_WINS_STATS): {
            const stats = {...state.stats};
            stats.games = stats.games + action.payload;
            stats.wins = stats.wins + action.payload;
            return {...state, stats};
        }
        case (COMP_WINS_STATS): {
            const stats = {...state.stats};
            stats.games = stats.games + action.payload;
            stats.looses = stats.looses + action.payload;
            return {...state, stats};
        }
        default:
            return state;
    }
}