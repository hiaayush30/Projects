const zod = require('zod');

const signupSchema = zod.object({
    username: zod.string().min(3).max(10),
    email: zod.string().email(),
    password: zod.string().min(4)
})
const signupValidation = async (req, res, next) => {
    const { username, email, password } = req.body;
    const response = signupSchema.safeParse({ username, email, password });
    if (!response.success) {
        console.log('signup validation error '+response.error.errors[0].message);
        return res.status(400).json({ message: 'bad request!' });
    }
    next();
}

const loginSchema = zod.object({
    username: zod.string().min(3).max(10),
    password: zod.string().min(4)
})
const loginValidation = async (req, res, next) => {
    const { username,password } = req.body;
    const response = loginSchema.safeParse({username,password});
    if (!response.success) {
        console.log('login validation error '+response.error.errors[0].message);
        return res.status(400).json({ message: 'bad request!' });
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}