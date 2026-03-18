const blog = require("../Model/BlogModel");

exports.postBlog = async (req, res, next) => {
    try {
        const post = await blog.create(req.body);
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

exports.getBlog = async (req, res, next) => {
    try {
        const get = await blog.find();
        if (!get) {
            return res.status(401).json({
                message: "Not Found"
            })
        }
        res.json(get)
    } catch (err) {
        next(err)
    }
}