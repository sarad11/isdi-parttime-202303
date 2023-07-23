const { retrievePost } = require('../logic')
const { extractUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = extractUserId(req)

        const { postId } = req.body

        retrievePost(userId, postId, (error, post) => {
            if (error) {
                res.status(404).json({ message: error.message })

                return
            }

            res.json(post)
        })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}