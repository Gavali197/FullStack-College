const user = require("../Model/UserModel");

exports.getuser = async (req, res, next) => {
    try {
        const findUser = await user.find();
        if (!findUser) {
            return res.status(401).json({
                message: "Not User avaliable"
            })
        }
        res.json(findUser);
    } catch (err) {
        next(err)
    }
}


exports.postUser = async(req, res, next) => {
    try{
const postuser = await user.create();
        if (!postuser) {
            return res.status(401).json({
                message: "some error from user post side"
            })
        }
        res.json(postuser);
    }catch(err){
        next(err)
    }
}