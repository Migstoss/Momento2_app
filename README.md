# Momento2_app
Aplicación del momento 2 By Jeremy García Morales

Pasos para hacer funcionar la aplicación
1. Crear una base de datos en mongo con el nombre medical_db, dentro de la base de datos crear una colección llamada sessions
2. Cambiar la ip en la url de la api por la ip local (ipconfig) en los siguientes archivos:
  - screens/create/create.js línea 18 columna 48
  - screens/delete/delete.js línea 11 columna 46
  - screens/edit/edit.js línea 19 columna 48
  - screens/list/list.js línea 15 columna 40
3. Ejecutar el comando npm install para instalar todas las dependencias
4. Ejecutar el comando npm start para iniciar la aplicación
