// Using JWT to verify if the user is logged in or not

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('token');

    if (!token) {
        return res.status(401).json({
            msg: 'Please Login!!!',
            error: [],
            data : {}
        })
    }
    try{
        const decoded = jwt.verify(token, 'jwt_secret');
        req.user = decoded.user;
        next();
    } catch(e) {
        console.log(e);
        res.status(403).json({msg: 'Invalid Token', err : [], data : {}});
    }

}

module.exports = auth;
