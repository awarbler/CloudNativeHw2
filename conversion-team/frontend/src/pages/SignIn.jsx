import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {TextField, Button, Card, CardContent, Typography, Box}from  "@mui/material";

import "./SignIn.css";

function SignIn() {
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSignIn(e) {
        e.preventDefault();

        // Placeholder sign-in logic
        if (username.trim() && password.trim()) {
            // store user localstorage
            localStorage.setItem("currentUser", username);
            // In a real app, you'd verify credentials here
            navigate("/projects"); // Navigate to projects page on successful sign-in
        } else {
            alert("Please enter both username and password");
        }
    }
    return (
        <div className="signin-page">
            <Card className="signin-card">
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Hardware Management System
                    </Typography>
                    <Box component="form" onSubmit={handleSignIn} className="signin-format">
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            style={{marginTop: "24px"}}
                        >
                            Sign In
                        </Button>
                    </Box>
                    <Typography variant="body2" align="center" style={{marginTop: "16px", color: "#666"}}>
                        Demo: use any user and password to sign in.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );

}

export default SignIn;