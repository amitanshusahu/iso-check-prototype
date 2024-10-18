import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  sn: Number,
  category: String,
  comp: Number,
});

export default mongoose.models.Data || mongoose.model('Data', DataSchema);