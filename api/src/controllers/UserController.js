const { User } = require('../db');


// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.findAll();
//         res.json(users);
//     } catch (error) {
//         res.status(400).json({message: 'Error al obtener los usuarios'});
//     }
// }

// const getUserById = async (req, res) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             res.status(404).json({message: 'Usuario no encontrado'});
//         } else {
//             res.json(user);
//         }
//     } catch (error) {
//         res.status(400).json({message: 'Error al obtener el usuario'});
//     }
// }

// const createUser = async (req, res) => {

//     const {name, email, password} = req.body;

//     if(!name | !email | !password) return res.json({message:'Missing required fields'})
//     try {
//         const user = await User.create({name, email, password});
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({message:'Error al crear el usuario'});
//     }
// }

// const updateUserById = async (req, res) => {

//     const {id} = req.params;
//     try {
//         const [rowsUpdated, [updatedUser]] = await User.update(
//         req.body,
//         {
//             returning: true,
//             where: { id: `${id}`},
//         });
//         if (rowsUpdated === 0) {
//             res.status(404).json({message: 'Usuario no encontrado'});
//         } else {
//             res.json(updatedUser);
//         }
//     } catch (error) {
//         res.status(500).json({message: 'Error al actualizar el usuario'});
//     }
// }

const deleteUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const rowsDeleted = await User.destroy({
            where: { id: `${id}`},
        });
        if (rowsDeleted === 0) {
            res.status(404).json({message: 'Usuario no encontrado'});
        } else {
            res.status(204).json({message: 'Usuario eliminado'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el usuario');
    }
}

module.exports = {getAllUsers, getUserById, createUser, updateUserById, deleteUserById};
