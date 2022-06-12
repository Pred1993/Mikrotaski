import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button2} from "./components/Button2";

export type messageType = {
    message: string;
};
export type TitleType = string

function App() {
    let [message, setMessage] = useState<Array<messageType>>([
        {message: 'message1'},
        {message: 'message1'},
        {message: 'message1'},
    ]);
    let [title, setTitle] = useState<TitleType>('')
    const addMessage = (title: string) => {
        const newObject = {message: title}
        const newMessage = [newObject, ...message]
        setMessage(newMessage);
    };
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className={'App'}>
            <Input
                setTitle={setTitle}
                title={title}
            />
            <Button2

                name={'+'}
                callBack={callBackButtonHandler}
            />
            {message.map((el, index: number) => {
                return <div key={index}>{el.message}</div>;
            })}
        </div>
    );
}

export default App;
