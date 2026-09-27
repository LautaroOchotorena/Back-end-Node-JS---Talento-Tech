# Proyecto Final - API de Productos

Aplicación de consola desarrollada en Node.js para interactuar con la API pública de Fake Store. Permite consultar, crear y eliminar productos usando argumentos por línea de comandos.

## Descripción

El proyecto consiste en un script ejecutable que consume la API de productos de Fake Store y realiza operaciones CRUD básicas desde la terminal.

## Tecnologías

- Node.js
- JavaScript ES Modules
- Fetch API
- Fake Store API

## Requisitos

- Node.js instalado en el sistema
- Conexión a internet para consultar la API externa

## Instalación

No requiere dependencias adicionales, solo clonar el proyecto y ejecutar el script:

```bash
npm install
```

> En este proyecto no hay dependencias externas, por lo que la instalación es opcional. El script puede ejecutarse directamente con npm start.

## Uso

### Obtener todos los productos

```bash
npm start GET products
```

### Obtener un producto por ID

```bash
npm start GET products/1
```

### Crear un producto

```bash
npm start POST products "Camisa de prueba" 25.99 "fashion"
```

Este comando envía un objeto con el siguiente formato:

```json
{
  "title": "Camisa de prueba",
  "price": 25.99,
  "category": "fashion"
}
```

### Eliminar un producto

```bash
npm start DELETE products/1
```

## Estructura del proyecto

```text
Proyecto final/
├── index.js
├── package.json
├── README.md
└── node_modules/  (si se instala)
```

## Archivo principal

- `index.js`: contiene la lógica de la CLI y las peticiones HTTP a la API.

## Ejemplo de salida

Al ejecutar:

```bash
npm start GET products/2
```

Se mostrará en consola un objeto JSON con la información del producto correspondiente
