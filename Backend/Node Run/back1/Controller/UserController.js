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
const postuser = await user.create(req.body);
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

exports.updateUser = async (req, res, next) => {
    try{
        await user.findByIdAndUpdate(
            req.param.id,
            req.body,
            {
                new : true,
                runValidators : true
            }
        );

        if(!this.updateUser){
            return res.status(401).json({
                message : "not found"
            })
        }

        res.json({
            message : "user update successfully",
            user : this.updateUser
        })
    }catch(err){
        next(err + "inssue in update")
    }
}



exports.deleteUser = async (req, res, next) => {
    try{
        await user.findByIdAndDelete(
            req.param.id,
            req.body,
            {
                new : true,
                runValidators : true
            }
        );

        if(!this.deleteUser){
            return res.status(401).json({
                message : "not found"
            })
        }

        res.json({
            message : "User delete successfully",
            user : this.deleteUser
        })
    }catch(err){
        next(err + "inssue in update")
    }
}