import { registerService } from '../services/authService.js';

export const register = (db) => async (req, res) => {
    console.log(req.body)
    
    try {
        const result = await registerService(db, req.body);
        res.status(201).json({
            message: 'Register berhasil',
            userId: result.id
        });
    } catch (error) {
        res.status(error.statusCode || 400).json({
            message: 'Registrasi gagal',
            error: error.message
        });
    }
};

// import { registerUser } from '../models/dbUser.js';

// export const register = async (req, res, db) => {
//     try {
//         const result = await registerUser(db, req.body);

//         res.status(201).json({
//             message: 'Register berhasil',
//             userId: result.id
//         });

//     } catch (error) {
//         res.status(400).json({
//             message: 'Register gagal',
//             error: error.message
//         });
//     }
// };