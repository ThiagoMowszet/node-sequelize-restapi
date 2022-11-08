import app from "./app.js"
import { sequelize } from "./db/db.js"
import "./models/Project.js"
import "./models/Task.js"

async function main() {

    try {
        await sequelize.sync({force: false});
        app.listen(3000)
        console.log('Server listening on port', 3000)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

main()
