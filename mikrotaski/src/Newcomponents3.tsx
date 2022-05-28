import './App.css';
import React, {useState} from 'react';

type moneyType = {
    banknots: string,
    value: number,
    number: string
}
type FilterType = 'All' | 'RUBLS' | 'Dollars'
type Newcomponents3PropsType = {
    arr: Array<moneyType>
}
export const Newcomponents3 = (props: Newcomponents3PropsType) => {
    const [filter, setFilter] = useState<FilterType>('All')
    let currentMoney = props.arr
    if (filter === 'RUBLS') {
        currentMoney = props.arr.filter((filteredMoney, index) => filteredMoney.banknots === 'RUBLS')
    } else if (filter === 'Dollars') {
        currentMoney = props.arr.filter((filteredMoney, index) => filteredMoney.banknots === 'Dollars')
    } else {
        currentMoney = props.arr.filter((filteredMoney, index) => filteredMoney.banknots)
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <>
            <ul>
                {currentMoney.map((ObjektFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span> {ObjektFromMoneyArr.banknots}</span>
                                <span> {ObjektFromMoneyArr.value}</span>
                                <span> {ObjektFromMoneyArr.number}</span>
                            </li>
                        )
                    }
                )}
                {/*<div className='App'>*/}
                {/*    <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('I am Vasya', 21)}/>*/}
                {/*    <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('I am Ivan')}/>*/}
                {/*    <Button name={'MyYouTubeChanel-3'} callBack={Button3Foo}/>*/}
                {/*</div>*/}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
};

