const { User } = require('./db/models')

const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id
    };
}

const restoreUser = async (req, res, next) => {
    if (req.session.auth) {
        let userId = req.session.auth.userId;
        try {
            const foundUser = await User.findByPk(userId);
            if (foundUser) {
                res.locals.authenticated = true;
                res.locals.user = foundUser;
                next();
            }
        } catch (error) {
            res.locals.authenticated = false;
            next();
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};


module.exports = {
    loginUser,
    restoreUser
}
