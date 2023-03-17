const { Router } = require('express');
const userRoutes = require('./userRoutes')
const contactRoutes = require('./contactRoutes')
const projectRoutes = require('./projectRoutes')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/user', userRoutes)
router.use('/contact', contactRoutes)
router.use('/project', projectRoutes)


module.exports = router;