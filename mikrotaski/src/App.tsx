import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent, StudentType} from "./site/NewComponent";
import {CarsType, NewComponent2} from "./site/NewComponent2";

function App() {
    const topCars: Array<CarsType> = [
        {manufacturer: "BMW", model: 'm5cs'},
        {manufacturer: "Mercedes", model: 'e63s'},
        {manufacturer: "Audi", model: 'rs6'}
    ]
    const students: Array<StudentType> = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]
    return (
        <div>
            <Header title={'New header'}/>
            <Body titleForBody={'New body'}/>
            <Footer titleForFooter={'New footer'}/>
            <NewComponent students={students}/>
            <NewComponent2 cars={topCars}/>
        </div>
    )
}

export default App