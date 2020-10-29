import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import models, { connectDb } from './models';
import routes from './routes';

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    user: await models.User.findByLogin('Mariano Lopez'),
  };
  next();
});

app.use('/movies', routes.movies);


const createUsersWithMovies = async () => {
  const user1 = new models.User({
    username: 'Mariano Lopez'
  });

  const movie1 = new models.Movie({
    name: 'First movie',
    user: user1._id
  })

  await user1.save();
  await movie1.save();
};

const eraseDatabaseOnSync = true;
connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Movie.deleteMany({}),
    ]);
    createUsersWithMovies();
  }
  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
  );
});

