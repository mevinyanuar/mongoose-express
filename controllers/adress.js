const Adress = require("../models/address")
const User = require('../models/user')

module.exports = {
    addAdress: async(req, res) => {
        const address =  await Adress.create({
            address: req.body.address
        });
        const user = await User.findOneAndUpdate(
            {_id: req.body._id },
            {$push: {addreses: address.id} },
            {new: true}
        )
        res.status(200).send({
            message: "Created new adress success",
            address,
            user
        })
    }
}