
// 
// const validator = require('express-joi-validation').createValidator({})

// 
const validator = schema => (req, res, next) => {
    try {
        schema.validateAsync(req.body)
    } catch (error) {
        error.status = 400;
        next(error);
    }
}

module.exports = validator