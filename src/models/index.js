import mongoose from 'mongoose';

import User from './user';
import Movie from './movie';

const models = { User, Movie };

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

export { connectDb };

export default models;