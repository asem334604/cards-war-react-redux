export const END_GAME = 'END_GAME';
export const PLAYER_WINS_STATS = 'PLAYER_WINS_STATS';
export const COMP_WINS_STATS = 'COMP_WINS_STATS';

export const endGameAction = (state) => ({
    type: END_GAME,
    payload: state
})

export const updatePlayerWinsAction = (points) => ({
    type: PLAYER_WINS_STATS,
    payload: points
})

export const updateCompWinsAction = (points) => ({
    type: COMP_WINS_STATS,
    payload: points
})

