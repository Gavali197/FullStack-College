const admin = require("../Model/AdminModel")


exports.getAdmin = async(req, res, next) => {
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



exports.postAdmin = async (req, res, next) =>  {
    try{
    const createAdmin = await admin.create(req.body);
    if(!createAdmin){
        return res.status(401).json({
            message : "Some error From Post Side"
        })
    }
    res.json(createAdmin)
    }catch(err){
        next(err)
    }
}