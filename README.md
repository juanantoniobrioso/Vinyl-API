# Vinyl-API 

Plan de mejora de competencias y resultados de aprendizaje para los módulos profesionales de **Desarrollo Web en Entorno Cliente (M0612)** y **Desarrollo Web en Entorno Servidor (M0613)**.

---

## Estructura del Proyecto

El repositorio sigue una arquitectura desacoplada estructurada en directorios independientes para garantizar una separación limpia de responsabilidades:

* **`/backend`**: API RESTful construida sobre Node.js y Express. Aplica un patrón modular dividiendo Rutas, Controladores y Modelos
* **`/frontend`**: Single Page Application (SPA) desarrollada con React y Vite. Gestiona el estado de forma asíncrona mediante la API Fetch nativa de JavaScript y manipula el DOM dinámicamente sin recargas de página.

---

## Instrucciones de Arranque

Dispone de dos alternativas independientes para compilar y ejecutar el proyecto completo:

### Opción A: Despliegue Automático con Orquestación (Recomendado)
Si dispone de un entorno compatible con Docker y Docker Compose, puede levantar la infraestructura multi-contenedor con un único comando desde la raíz del proyecto:

```
docker compose up --build
```

### Opción B: Despliegue de backend y frontend
Si quieres encender el backend y el frontend uno por uno puede hacerlo de la siguiente manera:

Para levantar el servidor en el backend, abre una consola y pon:
```
cd backend
npm install
npm run dev
```
Para levantar el servidor en el frontend, abre otra consola y pon:
```
cd frontend
npm install
npm run dev
```

## Peticiones API
Para ver las peticiones a la API puedes usar Postman. Con el Postman en GET puedes probar los siguientes endpoints:

### Obtener el catálogo entero de vinilos
Devuelve la colección íntegra de 20 vinilos con estructura de propiedades completa (id, titulo, artista, genero, anio, portada_url) y un código de estado 200 OK.
``
http://localhost:3000/api/vinilos
``
### Filtrar por género musical
Filtra dinámicamente en el controlador del servidor devolviendo únicamente las coincidencias exactas. Por ejemplo Rock
``
http://localhost:3000/api/vinilos?genero=Rock
``
### Filtrar por género con carácteres especiales
Ejemplo de petición segura para cadenas con caracteres reservados (como R&B), procesada en el cliente mediante encodeURIComponent.
``
http://localhost:3000/api/vinilos?genero=R%26B
``

### Gestión de rutas inexistentes
Verificación del manejador de errores semántico del backend. Devuelve una estructura JSON de advertencia junto con el código de estado 404 Not Found.
``
http://localhost:3000/api/dfghijdgfhuidfgih
``
