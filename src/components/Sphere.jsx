import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

const Sphere = (props) => {
    //const [radius, setRadius] = useState(1);
    const calculate = (e) => {
        let value = e.target.value;
        let result = value;
        let pi = 3.14;

        switch (props.action) {
            case "Square":
                result = 4 * pi * value * value;
                break;
            case "Perimeter":
                result = pi * value * 2;
                break;
        }

        props.setResult(result);
        props.setHasResult(true);
    }
    useEffect(() => {

    })
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Радиус</Form.Label>
                <Form.Control type="text" placeholder="" onChange={calculate} />
            </Form.Group>
        </>
    )
}

export default Sphere;