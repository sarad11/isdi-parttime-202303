const {
    validators: { validateName, validateEmail, validatePassword },
    errors: { DuplicityError }
} = require('com')

module.exports = function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    const { User } = require('../data/models')
    debugger
    return User.create({ name, email, password, avatar: null, favs: [] })
        .catch(error => {
            if (error.message.includes('E11000'))
                throw new DuplicityError(`user with email ${email} already exists`)
            throw error
        })

}