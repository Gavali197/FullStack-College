const books = require("../Model/BookShelfModel");

exports.postBook = async (req, res, next) => {
    try{
        const post = await books.create(req.body);
        if(!post){
            return res.status(401).json({
                message : "Server Error from Book Controller add"
            })
        }

        res.json(post)
    }catch(err){
        next(err)
    }
}

exports.get = async (req, res, next) => {
 try{
        const getData = await books.find();
        if(!getData){
            return res.status(401).json({
                message : "Server Error from Book Controller add"
            })
        }

        res.json(getData)
    }catch(err){
        next(err)
    }
}