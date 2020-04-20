// Aqui será o arquivo que cuidará de todas as rotas da aplicação

const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig); // Isso veio da documentação do multer

// Quando a rota for chamada desse jeito, ela chamará a controller e método que faz o post (que é o store)
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store); // Passado como parametro o nome da coluna que recebe a imagem e o single é para dizer que é apenas uma

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store); // Essa rota ficou dessa forma, pois eu só posso criar a reserva em cima de um spot já existente

module.exports = routes; // Serve para fazer a aplicação conhecer as rotas definidas aqui dentro