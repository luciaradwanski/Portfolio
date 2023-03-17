const { Contact } = require('../db');

// const getAllContacts = async (req, res) => {
//     try {
//         const contacts = await Contact.findAll();
//         res.status(200).json(contacts);
//     } catch (error) {
//         res.status(500).json({message:'Error al obtener los mensajes de contacto'});
//     }
// }


// const getContactById= async (req, res) => {
//     try {
//         const contact = await Contact.findByPk(req.params.id);
//         if (!contact) {
//             res.status(404).json({message: 'Mensaje de contacto no encontrado'});
//         } else {
//             res.staus(200).json(contact);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({message: 'Error al obtener el mensaje de contacto'});
//     }
// }

// const createContact = async (req, res) => {
//     const {name, email, message} = req.body;
//     try {
//         const contact = await Contact.create({name, email, message});
//         res.status(200).json(contact);
//     } catch (error) {
//         res.status(400).json({message: 'Error al crear el mensaje de contacto'});
//     }
// }

// const updateContactById = async (req, res) => {
//     const {id} = req.params;
//     try {
//         const [rowsUpdated, [updatedContact]] = await Contact.update(req.body,{
//             returning: true,
//             where: { id: `${id}`},
//         });
//         if (rowsUpdated === 0) {
//             res.status(404).json({message: 'Mensaje de contacto no encontrado'});
//         } else {
//             res.status(200).json(updatedContact);
//         }
//     } catch (error) {
//         res.status(400).json({message: 'Error al actualizar el mensaje de contacto'});
//     }
// }

// const deleteContactById = async (req, res) => {
//     const {id} = req.params;
//     try {
//         const rowsDeleted = await Contact.destroy({
//             where: { id: `${id}`},
//         });
//         if (rowsDeleted === 0) {
//             res.status(404).json({message: 'Mensaje de contacto no encontrado'});
//         } else {
//             res.status(204).json({message: 'Contacto eliminado'});
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({message : 'Error al eliminar el mensaje de contacto'});
//     }
// }


module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContactById,
    deleteContactById,
};
