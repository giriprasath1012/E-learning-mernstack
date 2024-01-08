import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/login", {
                email,
                password,
            });

            if (response.data === "exist") {
                history("/courses", { state: { id: email } });
                //alert("Successfully Login")
            } else if (response.data === "notexist") {
                alert("User does not exist");
            }
        } catch (e) {
            alert("Please enter correct details");
            console.log(e);
        }
    };

    const forget = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/login/${email}`);
            console.log(response.data);
            
            alert("Password reset instructions sent to your email.");
        } catch (error) {
            alert("Error sending password reset instructions");
            console.error("Error fetching data:", error);
        }
    };

    return (
        <section className="section">
            <div className="body">
                <div className="wrapper">
                    <form>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Email"
                                required
                            />
                            <i className="bx bxs-user"></i>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Password"
                                required
                            />
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <button type="submit" className="btn" onClick={submit}>
                            Login
                        </button>
                        <div className="register-link">
                            <p>
                                Don't have an account? <a href="/register">Register</a>
                            </p>
                        </div>
                        <div className="register-link">
                            <a onClick={forget}>Forgot Password</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
