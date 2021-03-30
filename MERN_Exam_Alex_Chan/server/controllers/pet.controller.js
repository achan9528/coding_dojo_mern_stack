const Pet = require("../models/pet.model");

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allDaPets => res.json({ pets: allDaPets }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(oneSinglePet => res.json({ pet: oneSinglePet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json(newlyCreatedPet))
        .catch(err => res.status(400).json(err));
};

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
