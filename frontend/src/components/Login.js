import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                username,
                password
            });

            localStorage.setItem("role", res.data.role);
            localStorage.setItem("username", res.data.user);

            // Redirect based on role
            if (res.data.role === "admin") navigate("/admin");
            else if (res.data.role === "manager") navigate("/manager");
            else navigate("/user");
        } 
        catch (err) {
            setMsg("Invalid username or password");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Role-Based Login</h2>

                <input 
                    style={styles.input}
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                    style={styles.input}
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button style={styles.button} onClick={handleLogin}>
                    Login
                </button>

                {msg && <p style={{ color: "red" }}>{msg}</p>}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f1f3f6"
    },
    card: {
        width: "350px",
        padding: "30px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        textAlign: "center"
    },
    title: {
        marginBottom: "20px",
        color: "#333"
    },
    input: {
        width: "90%",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "8px",
        border: "1px solid #ccc"
    },
    button: {
        width: "95%",
        padding: "12px",
        background: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "10px"
    }
};
