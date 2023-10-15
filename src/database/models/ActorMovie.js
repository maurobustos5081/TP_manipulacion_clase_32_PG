module.exports = (sequelize, dataTypes) => {
    let alias = 'ActorMovie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        actor_id: {
            type: dataTypes.STRING
        },
        movie_id: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'actor_movie',
        timestamps: false
    };
    const ActorMovie = sequelize.define(alias, cols, config)

    return ActorMovie
}