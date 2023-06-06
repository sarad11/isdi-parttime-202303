console.debug('update-user-avatar')

// import { validateId, validateUserAvatar, validateCallback } from "./helpers/validators.js"
import { saveUser, findUserById } from "../data.js"
import { validators } from 'com'

const {validateId, validateUserAvatar, validateCallback } = validators


export function updateUserAvatar(userId, newAvatar, callback) {
    validateId(userId)
    validateUserAvatar(newAvatar)
    validateCallback(callback)

   findUserById(userId, user => {
       if(!user) {
           callback(new Error ('User not found'))

           return
    } 
       user.avatar = newAvatar
       saveUser(user, () => callback(null))
   })
}

