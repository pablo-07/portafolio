const { Router }  = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/proyectos', (req, res) => {
    res.render('proyectos');
});

router.get('/servicios', (req, res) => {
    res.render('servicios');
});


router.get('/proyectosdiseno', (req, res) => {
    res.render('proyectosdiseno');
});


router.get('/sobremi', (req, res) => {
    res.render('sobremi');
});


module.exports = router;