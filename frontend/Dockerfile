# Usa una imagen oficial de Node.js para compilar y servir React
FROM node:18-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de definición de dependencias
COPY package*.json ./

# Instala las dependencias de React y Vite
RUN npm install

# Copia todo el código de la SPA de React
COPY . .

# Expone el puerto por defecto de Vite
EXPOSE 5173

# Comando para lanzar el servidor de desarrollo de Vite
# --host es necesario para que Docker pueda mapear el puerto hacia afuera
CMD ["npm", "run", "dev", "--", "--host"]