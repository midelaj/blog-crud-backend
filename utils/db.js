const mongoose = require("mongoose");



MONG_URI = "mongodb://localhost:27017/zoople2"

mongoose.connect(MONG_URI).then(() => {
    console.log("database connected successfully ")
}).catch((err) => {
    console.log("failed to connect the database", err.message)
});


module.exports = mongoose;