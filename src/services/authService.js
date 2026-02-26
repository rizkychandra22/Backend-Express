import { registerUser } from "../models/dbUser.js";

export async function registerService(db, user) {
    const { name, username, email, password, role } = user;
    const allowedRoles = ['root', 'admin', 'finance', 'teacher', 'student'];

    if (!name) throw new Error('Name cannot be empty');
    if (!username) throw new Error('Username cannot be empty');
    if (!email) throw new Error('Email cannot be empty');
    if (!password) throw new Error('Password cannot be empty');
    
    if (role && !allowedRoles.includes(role)) {
        throw new Error('Role is not valid');
    }

    const existingUser = await new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM users WHERE username = ?`,
            [username],
            (err, row) => {
                if (err) reject(err);
                else resolve(row);
            }
        );
    });

    if (existingUser) {
        const error = new Error('The username already exists');
        error.statusCode = 409;
        throw error;
    }

    return await registerUser(db, user);
}