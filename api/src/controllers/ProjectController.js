const { Product } = require('../db');

// const getAllProjects =  async (req, res) => {
//     try {
//         const products = await Product.findAll();
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(400).json({message: 'Error al obtener los productos'});
//     }
// }

// const getProjectById = async (req, res) => {
//     try {
//         const product = await Product.findByPk(req.params.id);
//         if (!product) {
//             res.status(404).json({message: 'Producto no encontrado'});
//         } else {
//             res.json(product);
//         }
//     } catch (error) {
//         res.status(400).json({message: 'Error al obtener el producto'});
//     }
// }

// const createProject =  async (req, res) => {
//     const {name, description, githubUrl, demoUrl, imageUrl} = req.body;
//     try {
//         const product = await Product.create({name, description, githubUrl, demoUrl, imageUrl});
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: 'Error al crear el producto'});
//     }
// }

// const updateProjectById = async (req, res) => {
//     const {id} = req.params;
//     try {
//         const [rowsUpdated, [updatedProduct]] = await Product.update(
//         req.body, {
//             returning: true,
//             where: { id: `${id}`},
//         });
//         if (rowsUpdated === 0) {
//                 res.status(404).json({message: 'Producto no encontrado'});
//         } else {
//             res.json(updatedProduct);
//         }
//     } catch (error) {
//         res.status(400).json({message: 'Error al actualizar el producto'});
//     }
// }

// const deleteProjectById = async (req, res) => {
//     const {id} = req.params;
//     try {
//         const rowsDeleted = await Product.destroy({
//             where: { id: `${id}`},
//         });
//         if (rowsDeleted === 0) {
//             res.status(404).json({message: 'Producto no encontrado'});
//         } else {
//             res.status(204).json({message: 'Proyecto eliminado'});
//         }
//     } catch (error) {
//         res.status(500).json({message: 'Error al eliminar el producto'});
//     }
// }

module.exports = {getAllProjects, getProjectById,  createProject, updateProjectById, deleteProjectById};
