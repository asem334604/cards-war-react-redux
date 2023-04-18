import './style.css';
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginAction} from "../actions/loginActions";

const Start = () => {

    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();

    const setValue = (e) => {
        setInputVal(e.target.value);
    }

    return (
        <div className={'container'}>
            <h2 className={'start_header'}>Ready for WAR</h2>
            <input className={'start_input'} placeholder={'Enter your name'}
                   type="text" onChange={setValue}/>
            <button className={'btn'}
                    onClick={() => {if (inputVal) dispatch(loginAction(inputVal))}}>
                start
            </button>
        </div>
    );
};

export default Start;

