import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setCpass] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        try {
            if (password === cpass) {
                const response = await axios.post("http://localhost:8000/register", {
                    email,
                    password,
                });

                if (response.data === "exist") {
                    alert("User already exists");
                } else if (response.data === "notexist") {
                    
                    history("/login", { state: { id: email } });
                }
            } else {
                alert("Password and confirm password don't match");
            }
        } catch (e) {
          console.log("Error:", e);
            alert("Wrong details");
            
        }
    };

    return (
        <section className="section">
            <div className="body">
                <div className="wrapper">
                    <form>
                        <h1>Register</h1>
                        <div className="input-box">
                            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            <i className="bx bxs-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" onChange={(e) => setCpass(e.target.value)} placeholder="Confirm Password" required />
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <button type="submit" className="btn" onClick={submit}>
                            Register
                        </button>
                        <div className="register-link">
                            <p>
                                Already have an account? <a href="/login">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Register;
