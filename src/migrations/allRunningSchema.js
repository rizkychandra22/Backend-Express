import createUserTable from "./schemaUser.js";

export default function runMigrations(db) {
    createUserTable(db);

    console.log('All running migrations and executed');
}