import mongoose from 'mongoose';
 
const moviesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);
 
const Movie = mongoose.model('Movies', moviesSchema);
 
export default Movie;