const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const validCredentials = {
    username: "user123",
    password: "pass123",
};

// POST /login endpoint
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Missing username or password" });
    }

    if (username === validCredentials.username && password === validCredentials.password) {
        return res.status(200).json({ token: "abc123" });
    }

    return res.status(401).json({ error: "Invalid username or password" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
