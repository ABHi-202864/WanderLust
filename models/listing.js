const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "https://img.freepik.com/premium-photo/silhouette-coconut-palm-trees-beach_999671-1237.jpg?w=740",
        set: (v) => v === "" ? "https://img.freepik.com/premium-photo/silhouette-coconut-palm-trees-beach_999671-1237.jpg?w=740" : v,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;