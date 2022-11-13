/**encargado de arrancar el sistema */
const app = require('./app');

// app.listen(app.get('port'), () => {
//     console.log('Server on port ', app.get('port')); 
// });
app.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);
