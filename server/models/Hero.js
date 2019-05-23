const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
  name:String
});

const Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;