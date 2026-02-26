import sqlite3 from 'sqlite3';
import runMigrations from '../migrations/allRunningSchema.js';
// import createUserTable from '../migrations/schemaUser.js';

function initDatabase() {
    const db = new sqlite3.Database('database.db', (err) => {
        if (err) {
            console.error('Gagal membuat database SQLite:', err.message)
        } else {
            console.log('Koneksi database SQLite berhasil...!')

        }
    });
    
    // Running Migrations
    runMigrations(db);
    
    // Create migration table
    // createUserTable(db);

    return db;
}

export default initDatabase;
