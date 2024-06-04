const routeSchema = new mongoose.Schema({
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    distance: { type: Number, required: true },
    estimatedTime: { type: Number, required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true }
  }, { timestamps: true });
  
  const Route = mongoose.model('Route', routeSchema);
  module.exports = Route;
  