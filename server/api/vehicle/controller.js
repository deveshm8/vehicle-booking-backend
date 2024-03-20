const db= require("../../models/index")
exports.getVehicles = async(req, res, next) => {
    const {wheel} = req.query;
    const options = {
        attributes: ["id", "name", "company", "number_plate"],
       }
    if(wheel){
        options.where ={
            wheels: wheel
        }
    }
   const list =  await db.Vehicle.findAll(options)
   return res.status(200).json(list)
}