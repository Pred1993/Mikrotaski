import React from "react";

type NewComponentPropsType = {
    students: Array<StudentType>
    //students: StudentType[]
}
export type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name} </span>
                        age: <span>{objectFromStudentArray.age}</span>
                    </li>
                )
            })}
            <li>Feta</li>
        </ul>
    );
};
