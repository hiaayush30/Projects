const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await User.findOne({ username });
        if (user) return res.status(409).json({ message: 'User already exists!', success: false })

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ username, email, password: hashedPassword });

        const token = jwt.sign({ username, id: newUser._id }, process.env.JWT_PASSWORD,{expiresIn:'24h'});
        res.cookie('token', token).status(200).json({ message: 'Signup successful', success: true });
    } catch (err) {
        console.log('signup error::' + err);
        res.status(500).json({ success: false, message: "Internal Server error" });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user =await User.findOne({ username });
        if (!user) return res.status(400).json({ success: false, message: 'username or password incorrect!' });
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ success: false, message: 'username or password incorrect!' });
        const token = jwt.sign({ username, id: user._id }, process.env.JWT_PASSWORD,{expiresIn:'24h'});
        res.cookie('token', token).status(200).json({ success: true, message: 'logged in successfully!' });
    } catch (err) {
        console.log('login error::' + err);
        res.status(500).json({ success:  false, message: 'internal server error' });
    }
}

module.exports = {
    signup,
    login
}