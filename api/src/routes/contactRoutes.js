const {Router} = require('express')
// const ContactController = require('../controllers/ContactController');
const {Contact} = require('../db')

const router = Router()

// router.get('/', ContactController.getAllContacts);

router.get('/', async (req,res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({message:'Error al obtener los mensajes de contacto'});
    }
})
// router.get('/:id', ContactController.getContactById);

router.get('/:id', async (req, res) =>{
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            res.status(404).json({message: 'Mensaje de contacto no encontrado'});
        } else {
            res.status(200).json(contact);
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'Error al obtener el mensaje de contacto'});
    }
});

// router.post('/', ContactController.createContact);

router.post('/', async (req, res) => {
    const {name, email, message} = req.body;
    try {
        const contact = await Contact.create({name, email, message});
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({message: 'Error al crear el mensaje de contacto'});
    }
});
// router.put('/:id', ContactController.updateContactById);

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const [rowsUpdated, [updatedContact]] = await Contact.update(req.body,{
            returning: true,
            where: { id: `${id}`},
        });
        if (rowsUpdated === 0) {
            res.status(404).json({message: 'Mensaje de contacto no encontrado'});
        } else {
            res.status(200).json(updatedContact);
        }
    } catch (error) {
        res.status(400).json({message: 'Error al actualizar el mensaje de contacto'});
    }
});

// router.delete('/:id', ContactController.deleteContactById);

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const rowsDeleted = await Contact.destroy({
            where: { id: `${id}`},
        });
        if (rowsDeleted === 0) {
            res.status(404).json({message: 'Mensaje de contacto no encontrado'});
        } else {
            res.status(204).json({message: 'Contacto eliminado'});
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({message : 'Error al eliminar el mensaje de contacto'});
    }
});

module.exports = router;
