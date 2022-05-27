import React from 'react';

export type CarsType = {
    manufacturer: string,
    model: string
}
type NewComponent2PropsType = {
    cars: Array<CarsType>
}
export const NewComponent2 = (props: NewComponent2PropsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.cars.map((ObjectFromArrayCarsType, index) => {
                return (
                    <tr key={index + 1}>
                        <td>{ObjectFromArrayCarsType.manufacturer}</td>
                        <td>{ObjectFromArrayCarsType.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

