// ===================
// Puerto
// ===================
process.env.PORT = process.env.PORT || 3000;

// ===================
// Entorno
// ===================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===================
// Base de datos
// ===================
let urlDB;

if ( process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //urlDB = 'mongodb+srv://Charliee95:Trend123@cluster0-wngfn.mongodb.net/cafe'  //Credenciales Visibles
    urlDB = process.env.MONGO_URI; // Ocultar credenciales
}
process.env.URLDB = urlDB;


//mongodb://localhost:27017/cafe
//mongodb+srv://Charliee95:Trend123@cluster0-wngfn.mongodb.net/cafe
//mongodb+srv://Charliee95:Trend123@cluster0-wngfn.mongodb.net/cafe?retryWrites=true&w=majority