import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Rectangle = (props) => {
    const [a, setA] = useState(0.0);
    const [b, setB] = useState(0.0);

    const calculate = () => {
        let result = 0;
        switch (props.action) {
            case "Square":
                result = a * b;
                break;
            case "Perimeter":
                result = 2 * (a + b);
                break;
        }

        props.setResult(result);
        props.setHasResult(true);
    }
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Сторона А</Form.Label>
                <Form.Control type="text" placeholder="" onChange={(e) => {setA(parseFloat(e.target.value)); }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Сторона Б</Form.Label>
                <Form.Control type="text" placeholder="" onChange={(e) => {setB(parseFloat(e.target.value)); }}/>
            </Form.Group>
            <Button variant="primary" onClick={calculate}>Primary</Button>
        </>
    )
}

export default Rectangle;