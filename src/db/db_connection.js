import models, { connectDb } from '../models';

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

export const initDatabase = async () => {
    try {
        return connectDb().then(async (res) => {
            if (eraseDatabaseOnSync) {
                await Promise.all([
                    models.User.deleteMany({}),
                    models.Movie.deleteMany({}),
                ]);
                createUsersWithMovies();
            }
            return res
        })
    } catch (error) {
        return new Error(error);
    }

}
