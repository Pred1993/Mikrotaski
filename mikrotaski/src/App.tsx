import React from 'react';
import './App.css';

function App() {
    // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hellow I am Vasya')
    // }
    // const myTwoSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hellow I am Artem')

    const onClickHandler = (name: string) => {
        console.log(name)
    }
        return (
            <div className='App'>
                {/*<button onClick={(event) => {console.log('Hellow')}}>MyYouTubeChanel-1</button>*/}
                <button onClick={(event) => onClickHandler("Artem")}>MyYouTubeChanel-1</button>
                <button onClick={(event) => onClickHandler('Vasya')}>MyYouTubeChanel-2</button>
            </div>
        )
    }


export default App