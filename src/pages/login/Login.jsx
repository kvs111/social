import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <button className="loginButton">Log In</button>
                        </Link>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register" style={{ textDecoration: "none" }}>
                            <button className="loginRegisterButton">
                                Create a New Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}