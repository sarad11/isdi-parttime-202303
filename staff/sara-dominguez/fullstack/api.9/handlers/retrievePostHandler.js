const { retrievePost } = require('../logic')
const { extractUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = extractUserId(req)

        const { postId } = req.params

        retrievePost(userId, postId)
            .then(post => res.json({ post }))
            .catch(error => res.status(404).json({ message: error.message }))
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}