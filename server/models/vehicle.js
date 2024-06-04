const vehicleSchema = new mongoose.Schema({
    vehicleType: { type: String, required: true },
    capacity: { type: Number, required: true },
    registrationNo: { type: String, required: true, unique: true },
    driverAssigned: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  }, { timestamps: true });
  
  const Vehicle = mongoose.model('Vehicle', vehicleSchema);
  module.exports = Vehicle;
  