import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config();

// Debug info
console.log('Connecting to database:', process.env.CONNECTION_MARIADB)

// Initialize instance of Sequelize
const sequelize = new Sequelize(process.env.CONNECTION_MARIADB, {
    logging: console.log(),
    dialect: 'mariadb',
    dialectOptions: {
        ssl: false
    }
})

// Test connection and database info
sequelize.authenticate()
    .then(async () => {
        console.log('Database connection is: OK');
        // check database information
        // const [results] = await sequelize.query('SELECT current_database(), current_schema()');
        // console.log('Connected to:', results[0])
    }) .catch(error => {
        console.error('Unable to connecto to current database:', error)
    })

export { sequelize };