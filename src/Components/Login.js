import React, { Component } from 'react';
// import Navbar from './Navbar';
// import axios from 'axios';

class Game extends Component {
    userFocus(){
        let elem = document.getElementById('username-parent');
        elem.style.width = '90%';
    }
    userBlur(){
        let elem = document.getElementById('username-parent');
        elem.style.width = '80%';
    }
    passFocus(){
        let elem = document.getElementById('password-parent');
        elem.style.width = '90%';
    }
    passBlur(){
        let elem = document.getElementById('password-parent');
        elem.style.width = '80%';
    }

    render(){
        return(
            <div id="login-background-wrapper">
                <div id="login-container">

                    <h1>volleyballers</h1>
                    <p>Sign In</p>

                    <form id="login-form">

                        <div className="d-flex-center w-100 mb-1">
                            <div id="username-parent" className="form-shrink">
                                <input id='txtUsername' className="input w-100" type="username" placeholder="Username" 
                                   onFocus={this.userFocus} onBlur={this.userBlur} />
                            </div>
                        </div>
                        <div className="d-flex-center w-100 mb-1">
                            <div id="password-parent" className="form-shrink">
                                <input id='txtPassword' className="input w-100" type="password" placeholder="Password" 
                                onFocus={this.passFocus} onBlur={this.passBlur}/>
                            </div>
                        </div>
                        <button id="btn-login" class="button">login</button>
                    </form>

                    <div class='d-flex-center w-100 flex-wrap mt-3'> 
                        <a class="link text-center w-100">Need an Account? <span class="text-green cursor-pointer">Sign Up</span></a>
                        <a class="link text-center w-100 text-green cursor-pointer">Forgot Your Password?</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Game;