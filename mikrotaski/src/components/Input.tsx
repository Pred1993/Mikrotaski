import React, {ChangeEvent} from 'react';
import {TitleType} from "../App";

export type InputPropsType = {
    setTitle: (title: TitleType) => void
    title: TitleType
}
export const Input = (props: InputPropsType) => {
    const inputHandler = ((e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    })
    return (
        <input value={props.title}
               onChange={inputHandler}/>
    );
};

