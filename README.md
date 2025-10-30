# EXAMEN DE PATRONES

**Estudiante:** David Jordan Anampa Pancca  
**Docente:** Ing. Patrick Cuadros  
**Fecha:** 2025

## Descripción General

Este repositorio contiene tres aplicaciones desarrolladas como parte del examen de patrones de diseño, cada una implementando diferentes tecnologías y patrones específicos con automatización completa mediante GitHub Actions.

## Estructura del Proyecto

### Aplicativo01 - Task Manager (React)
**Tecnología:** React.js con JavaScript  
**Patrón Implementado:** Componentes y Hooks  
**Funcionalidades:**
- Gestión completa de tareas (crear, editar, eliminar, marcar como completadas)
- Filtrado por estado (todas, pendientes, completadas)
- Interfaz moderna y responsive
- Persistencia en localStorage

**Automatización GitHub Actions:**
- Compilación automática del código React
- Ejecución de pruebas unitarias con Jest
- Generación de reportes de cobertura de código
- Publicación automática en GitHub Pages
- Creación de releases con artefactos ZIP
- Activación: push a main/master o creación de tags

### Aplicativo02 - Biblioteca Digital (Node.js)
**Tecnología:** Node.js con JavaScript  
**Patrón Implementado:** Servicios y Modelos  
**Funcionalidades:**
- Sistema de gestión de biblioteca digital
- Registro de usuarios y libros
- Control de préstamos y devoluciones
- Búsqueda y estadísticas
- Validación de vencimientos

**Automatización GitHub Actions:**
- Análisis automático de estructura de código
- Generación de documentación JSDoc completa
- Creación de diagramas de clases con PlantUML
- Publicación de documentación en GitHub Pages con interfaz moderna
- Notificaciones detalladas del proceso
- Activación: push a main/master/develop

### Aplicativo03 - Employee Visitor Pattern (C#)
**Tecnología:** .NET 8 con C#  
**Patrón Implementado:** Visitor Pattern  
**Funcionalidades:**
- Refactorización de sistema de empleados usando patrón Visitor
- Separación de responsabilidades entre clases de dominio y operaciones
- Implementación de Developer y Manager con ReportVisitor
- Pruebas unitarias completas con xUnit

**Características del Patrón Visitor:**
- Interfaz IVisitor para definir operaciones
- Interfaz IVisitable para objetos visitables
- ReportVisitor para generación de reportes
- Extensibilidad para nuevos tipos de visitantes

## Automatización y GitHub Actions

**IMPORTANTE:** Todos los aplicativos incluyen workflows de GitHub Actions que se activarán automáticamente al subir el código al repositorio.

### Aplicativo01 - publish_version.yml
- Se ejecuta en cada push o tag
- Compila, prueba y publica automáticamente
- Genera reportes de cobertura visibles en GitHub Pages
- Crea releases automáticos con artefactos

### Aplicativo02 - publish_doc.yml
- Se ejecuta en cada push a ramas principales
- Genera documentación técnica completa
- Crea diagramas de arquitectura automáticamente
- Publica todo en GitHub Pages con interfaz profesional


## Tecnologías Utilizadas

- **Frontend:** React.js, HTML5, CSS3, JavaScript ES6+
- **Backend:** Node.js, Express.js
- **Testing:** Jest, xUnit, React Testing Library
- **Documentación:** JSDoc, PlantUML
- **CI/CD:** GitHub Actions
- **Deployment:** GitHub Pages
- **Lenguajes:** JavaScript, C#, YAML

## Instrucciones de Ejecución

### Aplicativo01 (React)
```bash
cd Aplicativo01
npm install
npm start
```
Acceder a: http://localhost:3000

### Aplicativo02 (Node.js)
```bash
cd Aplicativo02
npm install
npm start
```

### Aplicativo03 (C#)
```bash
cd Aplicativo03
dotnet restore
dotnet run
```

## Pruebas

### Aplicativo01
```bash
npm test
npm run test:coverage
```

### Aplicativo02
```bash
npm test
npm run docs
```

### Aplicativo03
```bash
dotnet test
```

## Características Destacadas

1. **Automatización Completa:** Todos los procesos están automatizados con GitHub Actions
2. **Documentación Automática:** Generación automática de documentación técnica
3. **Pruebas Integradas:** Cobertura de código y pruebas unitarias
4. **Deployment Automático:** Publicación automática en GitHub Pages
5. **Releases Automáticos:** Generación de versiones con artefactos
6. **Interfaz Moderna:** Diseños responsive y profesionales
7. **Patrones de Diseño:** Implementación correcta de patrones específicos

## Configuración en GitHub

1. Subir el código al repositorio
2. Habilitar GitHub Pages en Settings → Pages → Source: GitHub Actions
3. Los workflows se ejecutarán automáticamente
4. Acceder a las URLs generadas para ver resultados

## Notas del Desarrollador

Este proyecto demuestra la implementación de diferentes patrones de diseño y tecnologías, con especial énfasis en la automatización de procesos mediante GitHub Actions. Cada aplicativo está diseñado para mostrar buenas prácticas de desarrollo, testing y deployment.

**Desarrollado por:** David Jordan Anampa Pancca  
**Curso:** Patrones de Software  
**Institución:** Universidad Privada de Tacna - Ing. Patrick Cuadros
