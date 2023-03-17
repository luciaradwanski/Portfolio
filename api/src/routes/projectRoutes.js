const {Router} = require('express')
// const ProjectController = require('../controllers/ProjectController');
const {Project} = require('../db')
const router = Router()

// router.get('/', ProjectController.getAllProjects);

router.get('/', async (req, res) => {
    try {
        const products = await Project.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({message: 'Error al obtener los productos'});
    }
});

// router.get('/:id', ProjectController.getProjectById);

router.get('/:id', async (req, res) => {
    try {
        const product = await Project.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({message: 'Producto no encontrado'});
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(400).json({message: 'Error al obtener el producto'});
    }
});

// router.post('/', ProjectController.createProject);

router.post('/', async (req, res) => {
    const {name, description, githubUrl, demoUrl, vimeoUrl} = req.body;
    if(!name | !description | !githubUrl) return res.json({message:'Missing required fields'})
    try {
        const product = await Project.create({name, description, githubUrl, demoUrl, vimeoUrl});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: 'Error al crear el producto'});
    }
});
// router.put('/:id', ProjectController.updateProjectById);

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const [rowsUpdated, [updatedProduct]] = await Project.update(
        req.body, {
            returning: true,
            where: { id: `${id}`},
        });
        if (rowsUpdated === 0) {
                res.status(404).json({message: 'Producto no encontrado'});
        } else {
            res.json(updatedProduct);
        }
    } catch (error) {
        res.status(400).json({message: 'Error al actualizar el producto'});
    }
});

// router.delete('/:id', ProjectController.deleteProjectById);

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const rowsDeleted = await Project.destroy({
            where: { id: `${id}`},
        });
        if (rowsDeleted === 0) {
            res.status(404).json({message: 'Producto no encontrado'});
        } else {
            res.status(204).json({message: 'Proyecto eliminado'});
        }
    } catch (error) {
        res.status(500).json({message: 'Error al eliminar el producto'});
    }
});

module.exports = router;

/* getAllProjects, getProjectById,  createProject,updateProjectById  deleteProjectById*/