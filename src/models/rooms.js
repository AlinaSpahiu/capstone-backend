const {Schema, model} = require('mongoose');


const roomsSchema = new Schema({
        name: {type: String, required: true},
        slug: {type: String, required: true},
        // type: {type: String, required: true},
        // price: {type: Number, required: true},
        // size: {type: Number, required: true},
        // capacity: {type: Number, required: true},
        // pets: {type: Boolean, required: true},
        // breakfast: {type: Boolean, required: true},
        // featured: {type: Boolean, required: true},
        // description: {type: String, required: true},
        // extras: {type: String, required: true},
        // images: {type: String }

},{
    timestamps: true,
}
)
const roomsModel = model('Rooms', roomsSchema);
module.exports = roomsModel;