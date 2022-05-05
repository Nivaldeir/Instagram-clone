const Post = require('../Models/Post')

module.exports = {
    async likePost(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers

        try {
            const likedPost = await Post.findById(post_id)
            if (!likedPost) return res.status(400).send('Post does not exist')
            if (likedPost.likes.includes(user_id)) return res.status(400).send('Post already liked')
            likedPost.likes.push(user_id)
            await likedPost.save()
            return res.status(200).send({
                message: 'Post liked',
                likedPost
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    async dislike(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers


        try {
            const dislike = await Post.findById(post_id)
            if (!dislike) return res.status(400).send('Post does not exist')
            if (!dislike.likes.includes(user_id)) return res.status(400).send('Post not liked yet')
            dislike.likes.pull(user_id)
            await dislike.save()

            return res.status(200).send({
                message: 'post unliked',
                dislike
            })

        } catch (error) {
            return res.status(400).send(error)
        }
    }
}