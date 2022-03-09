import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'


const Converter = (props) => {
    const [to, setTo] = useState(null);
    const [response, setResponse] = useState(null);
    const [cash, setCash] =  useState(null);
    const [result, setResult] =  useState(0);

    useEffect(() => {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(response => response.json())
            .then(result => {
                setResponse(result);
            })
            .catch(e => {
                console.error(e);
            })
    }, [])

    const calc = () => {
        if (to && cash) {
            Object.entries(response.Valute).map(([key, value]) => {
                if (key == to) {
                    setResult( Number(((cash / value.Nominal) / value.Value )).toFixed(2).toLocaleString());
                }
            })
        }
    }

    useEffect(() => {
        calc();
    }, [to])


    useEffect(() => {
        calc();
    }, [cash])


    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>У меня есть, руб.</Form.Label>
                <Form.Control type="text" placeholder=""  onChange={(e) => {setCash(e.target.value)}}  />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Выберите валюту, в которую нужно перевести рубли</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => {setTo(e.target.value)}}>
                    <option defaultValue>Выберите вариант</option>
                    { (response) &&  Object.entries(response.Valute).map(([key, value]) => {
                        return <option key={key} value={value.CharCode}>{value.Name}</option>;
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Результат</Form.Label>
                <Form.Control type="text" placeholder="" value={result} disabled  />
            </Form.Group>

        </>
    )
}

export default Converter;