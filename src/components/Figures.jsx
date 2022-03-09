import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Round from "./Round";
import Rectangle from "./Rectangle";
import Sphere from "./Sphere";

const Figures = () => {
    const [type, setType] = useState("");
    const [action, setAction] = useState("");
    const [result, setResult] = useState(0);
    const [hasResult, setHasResult] = useState(false);
    const selectType = (e) => {
        setType(e.target.value);
        setResult(0);
    }
    const selectAction = (e) => {
        setAction(e.target.value);
    }
    const listTypes = [
        {
            name: "Круг",
            value: "Round"
        },
        {
            name: "Прямоугольник",
            value: "Rectangle"
        },
        {
            name: "Сфера",
            value: "Sphere"
        }
    ];
    const listActions = [
        {
            name: "Площадь",
            value: "Square"
        },
        {
            name: "Периметер",
            value: "Perimeter"
        }
    ];
    const optionsTypes = listTypes.map((item, index) => {
        return <option key={index} value={item.value}>{item.name}</option>;
    });
    const optionsActions = listActions.map((item, index) => {
        return <option key={index} value={item.value}>{item.name}</option>;
    });

    return (
        <div className="Figures">
            <Form.Group className="mb-3">
                <Form.Label>Выбор типа фигуры</Form.Label>
                <Form.Select aria-label="Default select example" onChange={selectType}>
                    <option defaultValue>Выберите вариант</option>
                    {optionsTypes}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Что будем вычислять</Form.Label>
                <Form.Select aria-label="Default select example" onChange={selectAction}>
                    <option defaultValue>Выберите вариант</option>
                    {optionsActions}
                </Form.Select>
            </Form.Group>
            { (type === "Round") && <Round key={action} setHasResult={setHasResult}  setResult={setResult} action={action} /> }
            { (type === "Rectangle") && <Rectangle key={action} setHasResult={setHasResult}  setResult={setResult} action={action} /> }
            { (type === "Sphere") && <Sphere key={action} setHasResult={setHasResult}  setResult={setResult} action={action} /> }
            {
                (hasResult) &&
                <div className="result">
                    <div>
                        Результат вычислений:
                    </div>
                    <div>
                        <b>{result}</b>
                    </div>
                </div>
            }

        </div>
    );
}

export default Figures;