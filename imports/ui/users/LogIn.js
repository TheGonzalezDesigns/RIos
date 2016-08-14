import React from 'react';
import { browserHistory } from 'react-router';

class LogIn extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
        if (this.props.userInfo.first) {
            browserHistory.push('/');
        }
    }
    componentDidMount() {
        
    }
    handleUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.submitLogIn(this.state.username, this.state.password);
    }
    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form className='signup' onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='username'>username</label>
                        <input 
                            type='text' 
                            id='username' 
                            value={this.state.username} 
                            onChange={this.handleUsername}
                        />
                    </p>
                    <p>
                        <label htmlFor='password'>password</label>
                        <input 
                            type='password' 
                            id='password' 
                            value={this.state.password} 
                            onChange={this.handlePassword}
                        />
                    </p>
                    <input type='submit' value='log in' />
                </form>
            </div>
        );
    }
}

export default LogIn;
