import models, { connectDb } from '../models';

const seedDatabase = async () => {
    const user1 = new models.User({
        username: 'Mariano Lopez'
    });
    const categoriesSeed = [{ name: 'Acción'},{ name: 'Animación'},{ name: 'Aventura'},{ name: 'Ciencia Ficción'},{ name: 'Comedia'},{ name: 'Documentales'}];
    const category = new models.Category();
    category.collection.insertMany(categoriesSeed);
    await user1.save();
};

const eraseDatabaseOnSync = true;

export const initDatabase = async () => {
    try {
        return connectDb().then(async (res) => {
            if (eraseDatabaseOnSync) {
                await Promise.all([
                    models.User.deleteMany({}),
                    models.Movie.deleteMany({}),
                ]);
                seedDatabase();
            }
            return res
        })
    } catch (error) {
        return new Error(error);
    }

}
