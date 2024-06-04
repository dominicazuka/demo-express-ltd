const reviewSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, // foreign key to order table, id of the order associated with the review
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // foreign key to user table, id of the user associated with the review
    rating: { type: Number, required: true },
    comments: { type: String, required: true }
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  module.exports = Review;
  