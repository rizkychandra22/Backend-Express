function createUserTable(db) {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            role TEXT CHECK (role IN ('root', 'admin', 'finance', 'teacher', 'student')) DEFAULT 'student',
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `, (err) => {
        if (err) {
            console.error('Gagal membuat table users:', err.message);
        } else {
            console.log('Table users siap digunakan...!');
        }
    });
}

export default createUserTable;

// import initDatabase from '../src/database.js';

// function createUserTable() {
//     const db = initDatabase();

//     db.run(`
//         CREATE TABLE IF NOT EXISTS users (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT NOT NULL,
//             username TEXT UNIQUE NOT NULL,
//             email TEXT UNIQUE NOT NULL,
//             role TEXT CHECK (role IN ('dosen', 'mahasiswa')) DEFAULT 'mahasiswa',
//             password TEXT NOT NULL,
//             created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//             updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
//         );
//     `, (err) => {
//         if (err) {
//             console.error('Gagal membuat table users:', err.message);
//         } else {
//             console.log('Table users siap digunakan...!');
//         }
//     });
// }

// export default createUserTable;