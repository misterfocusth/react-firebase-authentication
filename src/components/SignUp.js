import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        alert(password.value.length)

        if (password.value.length >= 6) {
            try {
                firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
                setCurrentUser(true);
            } catch (error) {
                alert(error);
            }
        } else {
            alert("Your password must be at least 6 digits")
        }

    }

    if (currentUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <div className="container mt-5">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" minLength={6} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;