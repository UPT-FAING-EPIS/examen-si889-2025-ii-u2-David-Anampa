# GitHub Actions Setup - Configuración de Automatización CI/CD

## Descripción General

Este documento contiene las instrucciones paso a paso para configurar y utilizar la automatización de GitHub Actions implementada en este proyecto.

## Archivos de Automatización

### Archivos Creados
- `.github/workflows/publish_version.yml` - Workflow principal de CI/CD
- `.github/workflows/pages-setup.yml` - Configuración de GitHub Pages

## Configuración Paso a Paso

### 1. Configuración de GitHub Pages

#### Habilitar GitHub Pages en el Repositorio
1. Navega a tu repositorio: `https://github.com/UPT-FAING-EPIS/examen-si889-2025-ii-u2-David-Anampa`
2. Ve a **Settings** (Configuración)
3. En el menú lateral, selecciona **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Haz clic en **Save**

### 2. Configuración del Proyecto

#### Para Proyectos Node.js
Crea o modifica tu `package.json` con los siguientes scripts:

```json
{
  "name": "tu-proyecto",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --mode=production",
    "test": "jest",
    "test:coverage": "jest --coverage --coverageDirectory=coverage"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "webpack": "^5.0.0"
  }
}
```

#### Para Proyectos Python
Si tu proyecto es Python, modifica el workflow:

1. Abre `.github/workflows/publish_version.yml`
2. Reemplaza las secciones de Node.js con:

```yaml
- name: Setup Python
  uses: actions/setup-python@v4
  with:
    python-version: '3.9'

- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
    pip install pytest pytest-cov

- name: Run tests
  run: pytest

- name: Generate coverage report
  run: |
    pytest --cov=. --cov-report=html --cov-report-dir=coverage
```

#### Para Proyectos Java
Si tu proyecto es Java, modifica el workflow:

```yaml
- name: Setup Java
  uses: actions/setup-java@v3
  with:
    java-version: '11'
    distribution: 'temurin'

- name: Build with Maven
  run: mvn clean compile

- name: Run tests
  run: mvn test

- name: Generate coverage report
  run: mvn jacoco:report
```

### 3. Uso de la Automatización

#### Método 1: Crear Release con Tags
```bash
# Crear y publicar un tag
git tag v1.0.0
git push origin v1.0.0
```

#### Método 2: Ejecución Manual
1. Ve a la pestaña **Actions** en tu repositorio
2. Selecciona "Publish Version - Build, Test, Coverage & Release"
3. Haz clic en **Run workflow**
4. Ingresa la versión (ejemplo: v1.0.0)
5. Haz clic en **Run workflow**

### 4. Estructura de Versiones Recomendada

Utiliza versionado semántico:
- `v1.0.0` - Versión mayor (cambios incompatibles)
- `v1.1.0` - Versión menor (nuevas funcionalidades)
- `v1.1.1` - Parche (correcciones de errores)

### 5. Verificación de la Configuración

#### Verificar que los Workflows Funcionan
1. Haz un commit y push de cambios
2. Crea un tag de prueba: `git tag v0.1.0 && git push origin v0.1.0`
3. Ve a **Actions** y verifica que el workflow se ejecute

#### URLs de Verificación
Después de la primera ejecución exitosa:
- **Actions**: https://github.com/UPT-FAING-EPIS/examen-si889-2025-ii-u2-David-Anampa/actions
- **Releases**: https://github.com/UPT-FAING-EPIS/examen-si889-2025-ii-u2-David-Anampa/releases
- **GitHub Pages**: https://UPT-FAING-EPIS.github.io/examen-si889-2025-ii-u2-David-Anampa/

## Personalización Avanzada

### Cambiar Versión de Node.js
En `.github/workflows/publish_version.yml`, modifica:
```yaml
env:
  NODE_VERSION: '18'  # Cambia a tu versión preferida
```

### Modificar Directorios de Build
Ajusta las rutas según tu proyecto:
```yaml
- name: Upload build artifacts
  uses: actions/upload-artifact@v3
  with:
    name: build-artifacts
    path: |
      dist/
      build/
      public/
```

### Personalizar Reporte de Cobertura
Para cambiar el directorio de cobertura:
```yaml
- name: Upload coverage to Pages
  uses: actions/upload-pages-artifact@v2
  with:
    path: coverage/  # Cambia según tu configuración
```

## Solución de Problemas Comunes

### Error: "npm: command not found"
**Solución**: Verifica que tu proyecto tenga `package.json` o cambia a la configuración de tu lenguaje.

### Error: "No tests found"
**Solución**: 
- Asegúrate de tener tests en tu proyecto
- Verifica que el comando de test sea correcto
- Para proyectos sin tests, comenta la sección de tests temporalmente

### Error: "Pages deployment failed"
**Solución**:
1. Verifica que GitHub Pages esté habilitado
2. Asegúrate de que el directorio de cobertura exista
3. Revisa los permisos en Settings → Actions → General

### Error: "Release already exists"
**Solución**: 
- Usa una versión diferente
- O elimina el release/tag existente antes de crear uno nuevo

## Monitoreo y Mantenimiento

### Revisar Logs de Ejecución
1. Ve a **Actions** en tu repositorio
2. Haz clic en la ejecución que quieres revisar
3. Expande cada job para ver los logs detallados

### Notificaciones
Configura notificaciones en:
- **Settings** → **Notifications** → **Actions**

### Actualizaciones de Dependencias
Revisa periódicamente las versiones de las actions utilizadas:
- `actions/checkout@v4`
- `actions/setup-node@v4`
- `actions/upload-artifact@v3`

## Comandos de Referencia Rápida

```bash
# Crear release
git tag v1.0.0
git push origin v1.0.0

# Ver tags existentes
git tag -l

# Eliminar tag local y remoto
git tag -d v1.0.0
git push origin --delete v1.0.0

# Ver estado del repositorio
git status
git log --oneline -10
```

## Contacto y Soporte

Para problemas específicos:
1. Revisa los logs en la pestaña Actions
2. Consulta la documentación oficial de GitHub Actions
3. Verifica la configuración específica de tu tecnología

---

**Nota**: Esta configuración está optimizada para el repositorio `UPT-FAING-EPIS/examen-si889-2025-ii-u2-David-Anampa` pero puede adaptarse a otros proyectos modificando las URLs y configuraciones específicas.