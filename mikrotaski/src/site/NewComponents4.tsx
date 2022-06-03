import React from 'react';
import {FilterType} from "../App";

export type MoneyType = {
    id: number
    banknots: string
    value: number
    number: string
}
export type NewComponents4PropsType = {
    money: Array<MoneyType>
    filterFunction: (filter: FilterType) => void
}
export const NewComponents4 = (props: NewComponents4PropsType) => {
    const drawMoney = props.money.map((t) => {
        return (<li key={t.id}>
                <span>{t.banknots} </span>
                <span>{t.value} </span>
                <span>{t.number} </span>
            </li>
        )
    })
    return (
        <div>
            <ul>
                {drawMoney}
            </ul>
            <button onClick={() => {props.filterFunction('all')}}>all</button>
            <button onClick={() => {props.filterFunction('Dollars')}}>dollars</button>
            <button onClick={() => {props.filterFunction('RUBLS')}}>rubls</button>
        </div>


    );
};




