import React from "react";
import agent from "../agent";
import {
    LOGIN
} from "../constants/actionTypes";
import {connect} from 'react-redux';

const mapStateToProps = state => ({...state.login})

const mapDispatchToProps = dispatch => ({
    onSubmit: (username, password) => dispatch({type: LOGIN, payload: agent.Auth.login(username, password)})
})

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        this.props.onSubmit(this.state.username, this.state.password)
        console.log(this.props);
    }

    handlerChange = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.token}</p>
                <form>
                    <input
                        id='username'
                        type='text'
                        placeholder={'Insert your username'}
                        value={this.state.username}
                        onChange={this.handlerChange}
                    />
                    <input
                        id='password'
                        type='password'
                        placeholder={'Insert your password'}
                        value={this.state.password}
                        onChange={this.handlerChange}/>
                    <a onClick={this.login}>Login</a>
                </form>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
