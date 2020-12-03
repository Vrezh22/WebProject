import React from 'react';
import style from '../registration/registr.module.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { isSuchUserWithEmail } from '../../helpers/validators';


class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: null
    }
    render() {
        return (
            <div className={style.registerForm}>
                <h1>Login Page</h1>
                <span className={this.state.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{this.state.error ? this.state.error : null}</span>
                <Form>
                    <FormGroup>
                        <Label for="email1">Email</Label>
                        <Input type="email" name="email" id="email1" placeholder="Email" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pass">Password</Label>
                        <Input type="password" name="password" id="pass" placeholder="Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <Button onClick={this.handleOnSubmit} >Registration</Button>
                </Form>
            </div >
        )
    }
    handleOnChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    handleOnSubmit = (e) => {
        const { email, password } = this.state;
        const candidate = isSuchUserWithEmail(email);
        if (candidate) {
            if (password === candidate.password) {
                localStorage.setItem('isAuth', JSON.stringify(true));
                this.props.history.push('/');
            } else {
                this.setState((prevState) => ({
                    ...prevState,
                    error: 'Ներմուծվել է սխալ գաղտնաբառ'
                }))
                localStorage.setItem('isAuth', JSON.stringify(false))
            }
        }
        else {
            this.setState((prevState) => ({
                ...prevState,
                error: 'Սխալ էլ հասցե'
            }))
            localStorage.setItem('isAuth', JSON.stringify(false))
        }
    }
}


export default Login;