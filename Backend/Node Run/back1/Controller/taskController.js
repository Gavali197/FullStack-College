const taskApp = require("../Model/taskModel");

exports.addTask = async(req, res, next) => {

    try{
        const addTask = await taskApp.create(req.body);
        if(!addTask){
            return res.status(401).json({
                message : "Some error from task controller"
            })
        }

        res.json(addTask)
    }catch(err){
        next(err)
    }

}


exports.addTask = async(req, res, next) => {

    try{
        const getTask = await taskApp.find();
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