const db= require("../../models/index")
exports.bookVehicle = async(req, res, next) => {
   const {first_name, last_name, id, from_date, to_date} = req.body
   const createUser = await db.User.create({first_name, last_name});
   const createBooking = await db.Booking.create({
    user: createUser.id,
    vehicle: id,
    from_date: from_date,
    to_date: to_date
   })
   return res.status(200).json(createBooking)
}