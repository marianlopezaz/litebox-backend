import "core-js/stable";
import "regenerator-runtime/runtime";
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import models from './models';
import routes from './routes';
import { initDatabase } from "./db/db_connection";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    user: await models.User.findByLogin('Mariano Lopez'),
  };
  next();
});

app.get('/', function(req, res) { 
  res.sendFile(__dirname + '/index.html');
});
app.use('/movies', routes.movies);
app.use('/categories', routes.categories);

initDatabase().then((connection) => {
  if (!(connection instanceof Error)) {
    const port = process.env.PORT || 8080;
    app.listen(port, () =>
      console.log(`Liteboxapp running on port: ${port}!`),
    );
  } else {
    console.log(`Ocurrió un error al conectar con la base de datos`);
  }

})

