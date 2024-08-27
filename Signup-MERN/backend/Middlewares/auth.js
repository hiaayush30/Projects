const jwt = require('jsonwebtoken');
const checkAuthentication = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(403).json({message:"unauthorized,token required!"});
    try {
        const decoded = jwt.verify(token, process.env.JWT_pASSWORD);
        req.user=decoded;
        next();
    } catch (err) {
        console.log('checkAuthentication error::' + err);  
        return res.status(403).json({message:"unauthorized,token wrong or expired!"});
    }

}

module.exports = checkAuthentication;