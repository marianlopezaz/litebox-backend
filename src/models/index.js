import mongoose from 'mongoose';

import User from './user';
import Movie from './movie';
import Category from './category';

const models = { User, Movie, Category };

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

export { connectDb };

export default models;