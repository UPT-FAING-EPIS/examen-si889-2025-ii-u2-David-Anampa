# 🏛️ Biblioteca Digital

Sistema de gestión de biblioteca digital desarrollado en Node.js con documentación automática y diagramas de clases.

## 📋 Descripción

Este sistema permite gestionar usuarios, libros y préstamos en una biblioteca digital. Incluye funcionalidades para:

- ✅ Registro de usuarios y libros
- 📖 Gestión de préstamos y devoluciones
- 🔍 Búsqueda de libros
- 📊 Estadísticas del sistema
- ⏰ Control de libros vencidos

## 🏗️ Arquitectura

El sistema está organizado en las siguientes capas:

### Modelos
- **Usuario**: Gestiona la información de los usuarios del sistema
- **Libro**: Representa los libros disponibles en la biblioteca

### Servicios
- **BibliotecaService**: Coordina las operaciones entre usuarios y libros

## 🚀 Instalación

```bash
npm install
```

## 📖 Uso

```bash
npm start
```

## 📚 Documentación

La documentación se genera automáticamente usando JSDoc:

```bash
npm run docs
```

## 🧪 Pruebas

```bash
npm test
```

## 📊 Características

- **Documentación automática**: JSDoc con comentarios detallados
- **Diagramas de clases**: Generación automática con PlantUML
- **Arquitectura modular**: Separación clara de responsabilidades
- **Gestión de errores**: Manejo robusto de excepciones

## 🔧 Tecnologías

- Node.js
- JSDoc para documentación
- PlantUML para diagramas
- GitHub Actions para CI/CD

## 📄 Licencia

MIT