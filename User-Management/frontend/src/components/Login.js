import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className='container' style={{ padding: '75px 350px 75px 350px' }}>

                <body class="text-center">
                    <main class="form-signin">
                        <form>
                            <h1 class="h3 mb-3 fw-normal">Login</h1>

                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Username</label>
                            </div>
                            <br />
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <br />

                            <button class="btn btn-dark"><a href='/memberlist' style={{ textDecoration: 'none', color: 'white' }}>Login</a></button>
                        </form>
                    </main>
                </body>
                <br /><br /><br />

            </div>
        )
    }
}
