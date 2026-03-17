const blog = require("../Model/BlogModel");

exports.postBlog = async (req, res, next) => {
    try {
        const post = await blog.create(req.body.params);
        if (!post) {
            return res.status(401).json({
                message: "Not Found"
            })
        }
        res.json(post)
    } catch (err) {
        next(err)
    }
}