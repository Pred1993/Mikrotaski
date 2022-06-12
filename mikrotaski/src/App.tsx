import React from 'react';
import './App.css';
import { useState } from 'react';
import { FullInput } from './components/Fullinput';
export type messageType = {
  message: string;
};
function App() {
  let [message, setMessage] = useState<Array<messageType>>([
    { message: 'message1' },
    { message: 'message1' },
    { message: 'message1' },
  ]);
  const addMessage = (title: string) => {
    console.log(title)
    const newObject = {message: title}
    const newMessage = [newObject, ... message]
    setMessage(newMessage);
  };

  return (
    <div className={'App'}>
      <FullInput addMessage={addMessage} />
      {message.map((el, index: number) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}
export default App;
