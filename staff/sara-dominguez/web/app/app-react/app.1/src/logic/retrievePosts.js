console.log('load retrieve-post')

import { validateId } from "./helpers/validators.js"
import { users, posts } from "../data.js"

export default function retrievePost(userId) {
    validateId(userId)

    const foundUser = users().some(user => user.id === userId)

    if(!foundUser) throw new Error(`User with ${userId} not found`)

    return posts().toReversed() 
}