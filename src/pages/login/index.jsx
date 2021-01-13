import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from '../registration/register.module.css';
import { isSuchUserWithEmail } from '../../helpers/validator';

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
                <Form className={style.formline}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pass1">Password</Label>
                        <Input type="password" name="password" id="pass1" placeholder="Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <Button className={style.regBtn} onClick={this.handleOnSubmit}>Submit</Button>
                </Form>
            </div>
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
                localStorage.setItem('activeUser' ,JSON.stringify(candidate))
                this.props.history.push('/')
            }
            else {
                this.setState((prevState) => ({
                    ...prevState,
                    error: 'Սխալ գաղտնաբառ'
                }))
                localStorage.setItem('isAuth', JSON.stringify(false))
            }
        }
        else {
            this.setState((prevState) => ({
                ...prevState,
                error: 'Սխալ Էլ-հասցե'
            }))
            localStorage.setItem('isAuth', JSON.stringify(false))
        }
    }
}
export default Login;