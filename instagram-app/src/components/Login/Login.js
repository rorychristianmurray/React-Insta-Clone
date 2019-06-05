import React from 'react'

class Login extends React.Component {
    state = {

    }

    render(){
        return(
    <form className="login-form">
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