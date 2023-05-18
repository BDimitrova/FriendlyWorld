const Animals = require('../models/Animals');

exports.create = (animalData) => Animals.create(animalData);

exports.getAll = () => Animals.find().lean();

exports.getOne = (animalId) => Animals.findById(animalId).populate('donation');

exports.delete = (animalId) => Animals.findByIdAndDelete(animalId);

exports.updateOne = (animalId, animalData) => Animals.findByIdAndUpdate(animalId, animalData);

// exports.search = (animalText) => {
//     if (cryptoText) {
//         return (Animals.find({ name: {$regex: cryptoText, $options: 'i'} }).lean());
//     }
// }