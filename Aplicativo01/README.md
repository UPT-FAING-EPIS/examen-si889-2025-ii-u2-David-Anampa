# Task Manager - Aplicación de Gestión de Tareas

Una aplicación web moderna y elegante para gestionar tareas, construida con React y diseñada para demostrar las mejores prácticas de desarrollo y automatización con GitHub Actions.

## 🚀 Características

- ✅ **Gestión de Tareas**: Agregar, completar y eliminar tareas
- 📊 **Estadísticas en Tiempo Real**: Visualiza tu progreso con métricas útiles
- 💾 **Persistencia Local**: Las tareas se guardan automáticamente en localStorage
- 🎨 **Diseño Moderno**: Interfaz elegante con efectos glassmorphism y gradientes
- 📱 **Responsive**: Funciona perfectamente en dispositivos móviles y desktop
- 🧪 **Tests Completos**: Cobertura de tests unitarios con Jest y Testing Library
- 🔄 **CI/CD Automatizado**: Integración completa con GitHub Actions

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, CSS3 con diseño moderno
- **Iconos**: Lucide React
- **Testing**: Jest, React Testing Library
- **Build**: Create React App
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js 18 o superior
- npm o yarn

### Instalación Local
```bash
# Clonar el repositorio
git clone https://github.com/UPT-FAING-EPIS/examen-si889-2025-ii-u2-David-Anampa.git
cd examen-si889-2025-ii-u2-David-Anampa

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

# Ejecutar tests
npm test

# Generar build de producción
npm run build

# Ejecutar tests con cobertura
npm run test:coverage
```

### Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm test` - Ejecuta los tests en modo watch
- `npm run build` - Crea el build de producción
- `npm run test:coverage` - Ejecuta tests con reporte de cobertura
- `npm run lint` - Ejecuta el linter
- `npm run lint:fix` - Corrige automáticamente errores de linting

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── TaskForm.js      # Formulario para agregar tareas
│   ├── TaskList.js      # Lista de tareas con filtros
│   ├── TaskItem.js      # Componente individual de tarea
│   └── TaskStats.js     # Estadísticas de tareas
├── styles/
│   └── index.css        # Estilos principales
├── __tests__/           # Tests unitarios
│   ├── App.test.js
│   ├── TaskForm.test.js
│   ├── TaskItem.test.js
│   └── TaskStats.test.js
├── App.js               # Componente principal
├── index.js             # Punto de entrada
└── setupTests.js        # Configuración de tests
```

## 🔄 Automatización GitHub Actions

Este proyecto incluye una automatización completa de CI/CD que:

### Workflow Principal (`publish_version.yml`)
1. **Build**: Compila la aplicación React
2. **Test**: Ejecuta tests unitarios con cobertura
3. **Coverage**: Publica el reporte de cobertura en GitHub Pages
4. **Release**: Crea releases automáticos con artefactos
5. **Notify**: Notifica el éxito del proceso

### Configuración de GitHub Pages (`pages-setup.yml`)
- Configura automáticamente GitHub Pages
- Crea una página de índice con enlaces útiles

### Activación del Workflow

#### Por Tag (Recomendado):
```bash
git tag v1.0.0
git push origin v1.0.0
```

#### Manual:
1. Ve a Actions → "Publish Version"
2. Click en "Run workflow"
3. Ingresa la versión deseada

## 📊 Cobertura de Tests

El proyecto mantiene una cobertura de tests del 70% mínimo en:
- Líneas de código
- Funciones
- Ramas
- Declaraciones

### Ejecutar Tests Localmente
```bash
# Tests en modo watch
npm test

# Tests con cobertura
npm run test:coverage

# Tests una sola vez
npm test -- --watchAll=false
```

## 🎨 Características de Diseño

- **Glassmorphism**: Efectos de vidrio esmerilado modernos
- **Gradientes**: Paleta de colores atractiva
- **Animaciones**: Transiciones suaves y efectos hover
- **Tipografía**: Fuente Inter para mejor legibilidad
- **Responsive**: Diseño adaptativo para todos los dispositivos

## 🔗 URLs del Proyecto

Una vez desplegado, tendrás acceso a:

- **Aplicación**: `https://UPT-FAING-EPIS.github.io/examen-si889-2025-ii-u2-David-Anampa/`
- **Releases**: `https://github.com/UPT-FAING-EPIS/examen-si889-2025-ii-u2-David-Anampa/releases`
- **Actions**: `https://github.com/UPT-FAING-EPIS/examen-si889-2025-ii-u2-David-Anampa/actions`

## 📋 Funcionalidades de la Aplicación

### Gestión de Tareas
- ➕ Agregar nuevas tareas
- ✅ Marcar tareas como completadas
- 🗑️ Eliminar tareas individuales
- 🧹 Limpiar todas las tareas completadas

### Estadísticas
- 📈 Total de tareas
- ✅ Tareas completadas
- ⏳ Tareas pendientes
- 📊 Porcentaje de progreso

### Persistencia
- 💾 Guardado automático en localStorage
- 🔄 Recuperación de datos al recargar la página

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Para problemas o preguntas:
1. Revisa los [Issues](https://github.com/UPT-FAING-EPIS/examen-si889-2025-ii-u2-David-Anampa/issues)
2. Crea un nuevo issue si es necesario
3. Revisa la documentación de GitHub Actions

---

## 📚 Documentación Adicional

- [GITHUB_ACTIONS_SETUP.md](./GITHUB_ACTIONS_SETUP.md) - Guía detallada de configuración de GitHub Actions
- [Documentación de React](https://reactjs.org/docs)
- [Documentación de GitHub Actions](https://docs.github.com/en/actions)

**Desarrollado con ❤️ para demostrar las mejores prácticas de desarrollo web moderno**