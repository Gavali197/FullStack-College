const TaskApp = require("../Model/taskModel");

exports.addTask = async(req, res, next) => {

    try{
        const postTask = await TaskApp.create(req.body);
        if(!postTask){
            return res.status(401).json({
                message : "Some error from task controller"
            })
        }

        res.json(postTask)
    }catch(err){
        next(err)
    }

}


exports.FindTask = async(req, res, next) => {

    try{
        const getTask = await TaskApp.find();
        if(!getTask){
            return res.status(401).json({
                message : "Some error from task controller"
            })
        }

        res.json(getTask)
    }catch(err){
        next(err)
    }

}