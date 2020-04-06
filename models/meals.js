const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  title: String,
  imageBuf: {
    type: Buffer,
  },
  imageBufType: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

mealSchema.virtual('imageSrc').get(function () {
  if (this.imageUrl) {
    return this.imageUrl;
  } else if (this.imageBuf && this.imageBufType) {
    return `data:${
      this.imageBufType
    };charset=utf-8;base64,${this.imageBuf.toString('base64')}`;
  } else {
    throw new Error('virtual image data not found');
  }
});

module.exports = mongoose.model('Meal', mealSchema);
