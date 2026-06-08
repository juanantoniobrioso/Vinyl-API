# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Crea y define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de definición de dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código del backend
COPY . .

# Expone el puerto en el que corre el servidor Express
EXPOSE 3000

# Comando para arrancar la app en modo desarrollo (usando nodemon)
CMD ["npm", "run", "dev"]