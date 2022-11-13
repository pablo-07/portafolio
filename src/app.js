/**configuraciones */
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const hbs = require('handlebars')
const path = require('path');
const exphbs = require('express-handlebars');

//INICIALIZANDO
const app = express();

//AJUSTES 
app.use(express.static(path.join(__dirname, 'public')));

// app.set('port', 4000);
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));


// app.engine('.hbs', exphbs({
//     defautlLayout:'main',
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     partialsDir: path.join(app.get('views'), 'partials'),
//     extname: '.hbs'

// }));
app.set('view engine','.hbs');

//MIDDLEWARES
app.use(morgan('dev'));

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// const storage = multer.diskStorage({
//     destination:path.join(__dirname, 'public/uploads'),
//     filename: ( req, file, cb) =>{
//         cb(null, new Date().getTime() + path.extname(file.originalname));
//     }
// });

// app.use(multer(storage).single('image'));

//RUTAS
app.use(require('./routes'));

module.exports = app;
