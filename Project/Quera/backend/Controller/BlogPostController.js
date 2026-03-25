const blog = require("../Model/BlogModel");
const user = require("../Model/UserModel");
const bcrypt = require("bcrypt");

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


exports.getBlogById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const get = await blog.findById(id);
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

exports.postUser = async (req, res, next) => {
    try {
        const UserPost = await user.create(req.body);
        if (!UserPost) {
            return res.status(401).json({
                message: "Not Found"
            })
        }
        res.json(UserPost)
    } catch (err) {
        next(err)
    }
}



exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const getEmail = await user.findOne({ email });

        if (!getEmail) {
            return res.status(400).json({
                message: "user Not Found"
            })
        }

        if (getEmail.password !== password) {
            return res.status(400).json({
                message: "Incorrect Password"
            })
        }

        res.json({
            message: "Login Successfully",

            user: {
                id: getEmail._id,
                name: getEmail.name,
                email: getEmail.email
            }
        })
    } catch (err) {
        next(err)
    }
}