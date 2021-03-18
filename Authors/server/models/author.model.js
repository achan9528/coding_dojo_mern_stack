const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name:{
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [         
            3,
            "Author must be at least 3 characters long"
        ]
    }
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;