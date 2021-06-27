import React, { ChangeEvent, FormEvent,useState } from 'react'
import { Row, Col,Container,Form,Button} from "react-bootstrap";

export const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        console.log(e.currentTarget.value)
        if(e.currentTarget.name === 'email'){
            setEmail(e.currentTarget.value)
        }
        else{
            setPassword(e.currentTarget.value)
        }
    }
    const onSubmit =(e:FormEvent)=>{
        e.preventDefault()
        console.log(email,password)
    }
    
    return (
        <Container style={{background:'white',boxShadow:'0 0 15px -5px black'}}>
            <Row>
                <Col>
                <h1>Client Login</h1>
                <hr/>
                </Col>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <input className="form-control" onChange={(e)=>onChange(e)} type="email" name="email" placeholder="email" required/>
                <hr/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                        Password 
                        </Form.Label>
                        <input className="form-control" onChange={(e)=>onChange(e)} type="password" name="password" placeholder="password" required/>
                    </Form.Group>
                <hr/>

                    <Button type="submit" className="mt-5 mb-3">Login</Button>
                    </Form>
                    <hr/>

            </Row>
            <Row>
                <Col>
                {/* <a href="#">Forget Password?</a> */}
                </Col>
            </Row>
        </Container>
    )
}
