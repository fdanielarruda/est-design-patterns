import { Database } from "./database"

export class Application {
    main() {
        const users = Database.getInstance()
        users.query('SELECT * FROM users')

        const logs = Database.getInstance()
        logs.query('SELECT * FROM logs')

        if (users === logs) {
            console.log('Database is a singleton')
        }
    }
}