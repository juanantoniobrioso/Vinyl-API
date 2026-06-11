const vinilos = require('../models/vinilos');

// GetVinilos
const getVinilos = (req, res) => {
  const { genero } = req.query;

  try {
    if (genero) {
      const vinilosFiltrados = vinilos.filter(
        v => v.genero.toLowerCase() === genero.toLowerCase()
      );
      return res.status(200).json(vinilosFiltrados); 
    }

    return res.status(200).json(vinilos); 
  } catch (error) {
    return res.status(500).json({ 
      error: "500 Internal Server Error", 
      message: "Ocurrió un error inesperado al procesar los vinilos." 
    });
  }
};

module.exports = {
  getVinilos
};