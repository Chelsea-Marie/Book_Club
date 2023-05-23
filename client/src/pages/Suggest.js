import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

function Contact(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState("")

    function check(event) {
        let str = ""

        if(name == "" && event.target.name == "name") {
            str += "\nName cannot be empty!"
        }

        if(email == "" && event.target.name == "email") {
            str += "\nEmail cannot be empty!"
        }

        if(message == "" && event.target.name == "message") {
            str += "\nMessage cannot be empty!"
        }

        setAlert(str)
    }

    function handleChange(event) {
        if(event.target.name == "name") {
            setName(event.target.value)
        }

        if(event.target.name == "email") {
            setEmail(event.target.value)
        }

        if(event.target.name == "message") {
            setMessage(event.target.value)
        }

        console.log({
            name,
            email,
            message
        })
    }


    return (
        <div>
            <h3>{alert}</h3>
            <h2>This is Contact Page</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasiName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onBlur={check} onChange={handleChange} value={name} placeholder="Enter name" name="name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur={check} onChange={handleChange} value={email} placeholder="Enter email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiName">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" onBlur={check} onChange={handleChange} value={message} as="textarea" name="message" rows="5" placeholder="Enter name" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;