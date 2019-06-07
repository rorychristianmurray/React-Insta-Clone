import React from 'react'

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        errors: ""
    }

    login = event => {
        if(!this.state.username){
            this.setState({errors: 'please enter a username'})
        } 
        localStorage.setItem("username", JSON.stringify(this.state.username))
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
    <form onSubmit={this.login} className="login-form">
        <input
        placeholder="username"
        type="text"
        name="username"
        onChange={this.handleChanges}
        value={this.state.username}
        />

        <input
        placeholder="password"
        name="password"
        type="password"
        onChange={this.handleChanges}
        value={this.state.password}
        />

        <button onClick={this.login}>Hit it</button>

    </form>
        )
    }
}

export default Login;