const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    // index -- all listing route
    .get(wrapAsync(listingController.index))
    // create -- a new list route
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing));

// new -- add new listing route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    // show -- individul list route
    .get(wrapAsync(listingController.showListing))
    // update -- that edit list route
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))
    // delete -- listing route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// edit -- edit list route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;