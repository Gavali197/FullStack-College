const admin = require("../Model/AdminModel")


exports.getAdmin = async (req, res, next) => {
    try {
        const findUser = await admin.find();
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

exports.postAdmin = async (req, res, next) => {
    try {
        const createAdmin = await admin.create(req.body);
        if (!createAdmin) {
            return res.status(401).json({
                message: "Some error From Post Side"
            })
        }
        res.json(createAdmin)
    } catch (err) {
        next(err)
    }
}



exports.deleteAdmin = async (req, res, next) => {
    try {
        await admin.findByIdAndDelete(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!this.deleteAdmin) {
            return res.status(401).json({
                message: "not found"
            })
        }

        res.json({
            message: "User delete successfully",
            user: this.deleteAdmin
        })
    } catch (err) {
        next(err + "inssue in update")
    }
}

exports.UpdateAdmin = async (req, res, next) => {
    try {
        const updatedUser = await admin.findByIdAndUpdate(
            req.params.id,
            req.body, {
            new: true,
            runValidators: true
        }
        );

        if (!updatedUser) {
            return res.status(401).json({
                message: "Not Found"
            })
        }

        res.json({
            message: "User Update Successfully",
            admin: updatedUser
        })

    } catch (err) {
        next(err + "The Error Of update Controller")
    }
}