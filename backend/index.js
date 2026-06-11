const express = require('express');
const cors = require('cors');
const viniloRoutes = require('./src/routes/viniloRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use('/api', viniloRoutes);


app.use((req, res) => {
  res.status(404).json({ 
    error: "404 Not Found", 
    message: "El recurso o ruta que buscas no existe en Vinyl-API." 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor de Vinyl-API corriendo en el puerto ${PORT}`);
});