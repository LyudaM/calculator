import React, { useState, useEffect } from 'react';
import Figures from "./Figures";
import Converter from "./Converter";
import Form from 'react-bootstrap/Form'

const defaultCalcComponent = "Figures";

const Switcher = () => {
    const [currentCalc, setCurrentCalc] = useState(defaultCalcComponent);
    const optionsList = [
        {
            name: "Математический калькулятор",
            component: "Figures"
        },
        {
            name: "Конвертер валют",
            component: "Converter"
        }
    ];
    const options = optionsList.map((item, index) => {
        return <option key={index} value={item.component}>{item.name}</option>;
    });

    return (
        <div className="wrap">
            <div className="Switcher">
                <Form.Group className="mb-3">
                    <Form.Label>Выбор калькулятора</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e) => {setCurrentCalc(e.target.value)}}>
                        {options}
                    </Form.Select>
                </Form.Group>
            </div>
            { (currentCalc === "Figures") && <Figures /> }
            { (currentCalc === "Converter") && <Converter /> }
        </div>
    );
}

export default Switcher;