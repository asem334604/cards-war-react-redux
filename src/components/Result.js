import React from 'react';
import Game from "./Game";
import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {endGameAction} from "../actions/gameActions";

const Result = () => {

    const isGameEnded = useSelector(state => state.game.isGameEnded);
    const gameStats = useSelector(state => state.stats);
    const dispatch = useDispatch();

    return (
        (!isGameEnded) ? (
            <Game/>
        ) : (
            <div className={'container'}>
                <h3>GAMES: {gameStats.games}</h3>
                <h3>WINS: {gameStats.wins}</h3>
                <h3>LOOSES: {gameStats.looses}</h3>
                <button onClick={() => dispatch(endGameAction(false))} className={'btn'}>Again?</button>
            </div>
        )
    );
};

export default Result;
