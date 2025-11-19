const users = [
    { username: "alice", password: "password123", role: "admin" },
    { username: "bob", password: "password123", role: "manager" },
    { username: "carl", password: "password123", role: "user" },
];

exports.login = (req, res) => {

    console.log("Login API HIT. Body received:", req.body); // DEBUG

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Missing username or password" });
    }

    const foundUser = users.find(
        (u) => u.username === username && u.password === password
    );

    if (!foundUser) {
        console.log("❌ User not found");
        return res.status(400).json({ message: "Invalid username or password" });
    }

    console.log("✅ Login Success:", foundUser);

    res.json({
        message: "Login successful",
        role: foundUser.role,
        user: foundUser.username
    });
};
