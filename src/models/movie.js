import mongoose from 'mongoose';
 
const moviesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: {
      type: String,
    },
    category: {
      type: String,
    }
  },
  { timestamps: true },
);
 
const Movie = mongoose.model('Movies', moviesSchema);
 
export default Movie;