# Employee Visitor Pattern

Aplicación C# que demuestra la implementación del patrón Visitor para refactorizar un sistema de empleados.

**Desarrollado por:** Usuario

## Descripción

Esta aplicación refactoriza las clases Employee originales utilizando el patrón Visitor, separando la lógica de generación de reportes de las clases de dominio.

## Estructura del Proyecto

- `IVisitor.cs` - Interfaz que define los métodos de visita
- `IVisitable.cs` - Interfaz para objetos que pueden ser visitados
- `Employee.cs` - Clase base abstracta refactorizada
- `Developer.cs` - Clase Developer usando patrón Visitor
- `Manager.cs` - Clase Manager usando patrón Visitor
- `ReportVisitor.cs` - Implementación concreta del visitor para reportes
- `EmployeeReportTests.cs` - Pruebas unitarias refactorizadas

## Ejecución

```bash
dotnet run
```

## Pruebas

```bash
dotnet test
```

## Beneficios del Patrón Visitor

1. Separación de responsabilidades
2. Facilita agregar nuevas operaciones sin modificar las clases existentes
3. Cumple con el principio abierto/cerrado
4. Permite diferentes tipos de visitantes para diferentes operaciones