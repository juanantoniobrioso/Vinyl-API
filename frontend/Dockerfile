# Usa una imagen oficial de Node.js para React
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

# Forzamos a Vite a mapear el host correctamente hacia afuera del contenedor
ENV VITE_HOST=0.0.0.0
ENV HOST=0.0.0.0

# Comando limpio para lanzar el servidor de desarrollo de Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]