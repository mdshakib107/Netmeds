import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const SingIn = () => {
    const { singInWithGoogle, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/singin'
    const handaleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                history.push(redirect_uri)

            })
    }
    return (
        <div>
            {user.email ?
                <h1 className="container d-flex justify-content-center p-5 ">Welcome:{user.displayName}</h1>
                :
                <div className="container d-flex justify-content-center ">
                    <div className="p-5">
                        <img src="./image/login.png" alt="" />
                    </div>
                    <div className="container text-start p-5 ">
                        <h1>Sing In</h1>
                        <p>Sign up or Sign in to access your orders, special offers, health tips and more!</p>
                        <Form>
                            <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p>Alredy have Account? <Link to="/register"> Go to Log In</Link> </p>
                        ------------------------or------------------------
                        <br />

                        <Button variant="primary" type="submit" onClick={handaleGoogleLogin}>
                            Sing In with Google
                        </Button>
                    </div>
                </div>}
        </div>
    );
};

export default SingIn;