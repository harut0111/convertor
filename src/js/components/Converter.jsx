import React, { useState, useEffect } from 'react';
import '../style/convertor.css'

import { connect } from "react-redux";
import {setListquotes} from '../redux/action';

const Converter = (props) => {

    const [number, setNumber] = useState(1);
    const [from, setFrom] = useState('SGD');
    const [to, setTo ] = useState('MYR');
    // const [listquotes, setListquotes] = useState([]);
    const [exchangeVal, setExchangeVal ] = useState(0);

    console.log(from, to);
    console.log(exchangeVal);


    const getlLstquotes = () => {

        fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
                "x-rapidapi-key": "df77dc278fmshd547c435f4d06cbp1a1ff2jsn468cd5c536f5"
            }
        })
        .then(response => response.json())
        .then(response => props.setListquotes(response))
        .catch(err => {
            console.log(err);
        });

    }

    const getExchange = () => {
            fetch(`https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=${from}&to=${to}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
                    "x-rapidapi-key": "df77dc278fmshd547c435f4d06cbp1a1ff2jsn468cd5c536f5"
            }
        })
        .then(response => response.json())
        .then(response => setExchangeVal(response))
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getlLstquotes();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getExchange();
        // eslint-disable-next-line
    }, [from, to, number])


    const options = props.listquotes.map((item, index) => {
        return  (
            <option value={`${item}`}  key= {index}>{item}</option>
        )
    })

    const onReverseClickHandler = () => {
        const [cloneForm, cloneTo] = [from, to];
        setFrom(cloneTo);
        setTo(cloneForm);
    }

    return (
        <div className="convertor">
            <h1>Convertor</h1>
            Amount:
            <input 
                type='number'
                className="amount"
                value={number}
                onChange={(e) => setNumber(e.target.value)} 
                placeholder='amount'
                required />
            <select className="listquotes" value={from} onChange={e => setFrom(e.target.value)}>
                {options} 
            </select>

            <button className="reverseBtn" onClick={onReverseClickHandler}>Reverse</button>

            <select className="listquotes" value={to} onChange={e => setTo(e.target.value)}>
                {options}
            </select>
            <p>{`${number} ${from} = ${number * exchangeVal} ${to}`}</p>

        </div>
    )
}

const mapStateToPorps = state => {
    return {
        listquotes: state.listquotes
    }
}

const mapDispatchtoProps = {
    setListquotes,
}

export default connect(mapStateToPorps, mapDispatchtoProps)(Converter);