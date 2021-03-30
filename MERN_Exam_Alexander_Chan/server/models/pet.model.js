const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name:{
        type: String,
        required: [
            true,
            "Pet Name is required!"
        ],
        minLength: [         
            3,
            "Pet Name must be at least 3 characters long!"
        ]
    }, type:{
        type: String,
        required: [
            true,
            "Pet Type is required!"
        ],
        minLength: [
            3,
            "Pet Type Name must be at least 3 characters long!"
        ]
    }, description:{
        type: String,
        required: [
            true,
            "Pet Description is required!"
        ],
        minLength: [
            3,
            "Pet Description must be at least 3 characters long!"
        ]
    }, skills:{
        type: Array,
        validate: [
            (val) => {
                val.length <= 3
            }, "No more than 3 Skills Allowed"
        ]
    }
    // }, skill1: {
    //     type: String,
    //     required: [
    //         false
    //     ]
    // }, skill2: {
    //     type: String,
    //     required: [
    //         false
    //     ]
    // }, skill3: {
    //     type: String,
    //     required: [
    //         false
    //     ]
    // }
});



const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;