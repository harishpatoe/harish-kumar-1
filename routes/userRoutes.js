const express = require("express");
const User = require("../models/User.model"); // Ensure User model is imported
const router = express.Router();

// User Registration Route
router.post("/api/auth/registration", async (req, res) => {
    try {
        const { fullName, username, email, phone, password, reenter } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        // Save user
        const newUser = new User({ fullName, username, email, phone, password, reenter });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
