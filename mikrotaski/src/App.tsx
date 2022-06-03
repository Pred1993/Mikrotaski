import React, {useState} from 'react';
import './App.css';
import {MoneyType, NewComponents4} from "./site/NewComponents4";

export type FilterType = 'all' | 'Dollars' | 'RUBLS'

function App() {
    const [money, setMoney] = useState<Array<MoneyType>> ([
        {id: 1, banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {id: 2, banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {id: 3, banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {id: 4, banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {id: 5, banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {id: 6, banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {id: 7, banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {id: 8, banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('all')
    const filterFunction = (filter: FilterType) => {
        setFilter(filter)
    }
    let moneyFilter = money
    if (filter === 'Dollars') {
        moneyFilter = money.filter(t => t.banknots === filter)
    }
    if (filter === 'RUBLS') {
        moneyFilter = money.filter(t => t.banknots === filter)
    }
    return (
        <NewComponents4
            money={moneyFilter}
            filterFunction={filterFunction}
        />
    )
}

export default App
