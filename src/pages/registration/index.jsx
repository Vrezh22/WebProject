import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import style from './registr.module.css';
//validators 
import { maxLength, minLength, validateEmail, isAllValid, isSuchUserWithEmail } from '../../helpers/validators';

class Registration extends React.Component {
    state = {
        name: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null
        },
        email: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null
        },
        password: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null
        },
        confirm: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null
        }
    }
    render() {
        const { name, email, password, confirm } = this.state;
        return (
            <div className={style.registerForm}>
                <h1>Registration Page</h1>
                <Form>
                    <FormGroup>
                        <span className={name.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{name.error ? name.error : null}</span>
                        <Label for="name1">Name</Label>
                        <Input type="text" name="name" id="name1" placeholder="Name" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <span className={email.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{email.error ? email.error : null}</span>
                        <Label for="email1">Email</Label>
                        <Input type="email" name="email" id="email1" placeholder="Email" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <span className={password.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{password.error ? password.error : null}</span>
                        <Label for="pass">Password</Label>
                        <Input type="password" name="password" id="pass" placeholder="Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <span className={confirm.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{confirm.error ? confirm.error : null}</span>
                        <Label for="conf">Confirm Password</Label>
                        <Input type="password" name="confirm" id="conf" placeholder="Confirm Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <Button onClick={this.handleOnSubmit} >Registration</Button>
                </Form>
            </div >
        )
    }
    handleOnChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        let isValid = false;
        let error = null;
        switch (name) {
            case "email": {
                isValid = validateEmail(value);
                isValid = !isSuchUserWithEmail(value);
                error = isValid ? null : 'Սխալ Էլ-Հասցե կամ արդեն այն կա';
                break;
            }
            case "confirm": {
                isValid = this.state.password.value === value;
                error = isValid ? null : 'Սխալ Գաղտնաբառի կրկնություն';
                break;
            }
            case 'password':
            case 'name': {

                isValid = maxLength(20)(value) && minLength(3)(value);
                error = isValid ? null : 'Գրեք 3 - ից երկար և 20 - ից կարճ բառ';
                break;
            }
            default:
                break;
        }
        this.setState((prevState) => ({
            ...prevState,
            [name]: {
                isTouched: true,
                isValid,
                value,
                error
            }
        }))
    }
    handleOnSubmit = (e) => {
        if (isAllValid(this.state)) {
            let users = localStorage.getItem('users');
            users = users ? JSON.parse(users) : [];
            users.push({
                id: Date.now() + this.state.name.value,
                name: this.state.name.value,
                email: this.state.email.value,
                password: this.state.password.value
            })
            localStorage.setItem('users', JSON.stringify(users));
            this.props.history.push('/login');
        } else {
            console.log('No');
        }

    }
}

export default Registration;