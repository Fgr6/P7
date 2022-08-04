const mongoose = require('mongoose');

const actuSchema = mongoose.Schema({
    userId: { type : String, require : true},
    titre: { type : String, require : true},
    message: { type : String},
    imageUrl: { type: String},
    likes: { type: Number, require: true},
    usersLiked: [String],
});

module.exports = mongoose.model('Actu', actuSchema);