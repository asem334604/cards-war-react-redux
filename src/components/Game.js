import Result from "./Result";
import newCardDeck from "../utils/NewCardDeck";
import RandomNumber from "../utils/RandomNumber";
import './style.css';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {endGameAction, updateCompWinsAction, updatePlayerWinsAction} from "../actions/gameActions";


const Game = () => {

        const [playerDeck, setPlayerDeck] = useState([]);
        const [compDeck, setCompDeck] = useState([]);

        const [playerScore, setPlayerScore] = useState(0);
        const [compScore, setCompScore] = useState(0);

        const isGameEnded = useSelector(state => state.game.isGameEnded);
        const dispatch = useDispatch();

        useEffect(() => {
            if (!isGameEnded) {
                let pArr = [], cArr = [], newDeck = newCardDeck();
                if (newDeck) {
                    while (newDeck.length > 26) {
                        let cardPos = RandomNumber(newDeck.length);
                        pArr.push(newDeck[cardPos]);
                        newDeck.splice(cardPos, 1);
                    }
                    while (newDeck.length > 0) {
                        let cardPos = RandomNumber(newDeck.length);
                        cArr.push(newDeck[cardPos]);
                        newDeck.splice(cardPos, 1);
                    }
                }
                setPlayerDeck(pArr);
                setCompDeck(cArr);
            }
        }, [isGameEnded]);


        const handleNextMove = () => {
            let playerPoint = 0, compPoint = 0;
            if (compDeck.length > 1 || playerDeck.length > 1) {
                compDeck[0] < playerDeck[0] ? playerPoint++ : compPoint++;
                setPlayerScore(prevPlayerScore => prevPlayerScore + playerPoint);
                setCompScore(prevCompScore => prevCompScore + compPoint);
                compDeck.splice(0, 1);
                playerDeck.splice(0, 1);
            } else {
                if (playerScore > compScore) {
                    dispatch(updatePlayerWinsAction(1))
                } else if (playerScore < compScore) {
                    dispatch(updateCompWinsAction(1))
                } else {
                    dispatch(updatePlayerWinsAction(0))
                }
                dispatch(endGameAction(true));
                setPlayerScore(0);
                setCompScore(0);            }
        }

        return (
            (isGameEnded) ? (
                <Result/>
            ) : (
                <div className={'container'}>
                    <h2>COMPUTER - {compScore}</h2>
                    <div className="card">{compDeck[0]}</div>
                    <div className="card">{playerDeck[0]}</div>
                    <h2>YOU - {playerScore}</h2>
                    <button className={'btn'} onClick={handleNextMove}>Next</button>
                </div>
            )
        )
    }
;

export default Game;

