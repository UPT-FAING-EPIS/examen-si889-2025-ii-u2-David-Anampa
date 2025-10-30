using EmployeeVisitorPattern;

Console.WriteLine("Employee Visitor Pattern Demo");
Console.WriteLine("Desarrollado por Usuario");
Console.WriteLine("========================================");

var developer = new Developer
{
    Name = "Ana Garcia",
    Salary = 85000,
    ProgrammingLanguage = "C#"
};

var manager = new Manager
{
    Name = "Carlos Rodriguez",
    Salary = 110000,
    TeamSize = 7
};

var reportVisitor = new ReportVisitor();

Console.WriteLine("\nGenerando reportes usando el patron Visitor:");

developer.Accept(reportVisitor);
Console.WriteLine($"Developer Report: {reportVisitor.Report}");

manager.Accept(reportVisitor);
Console.WriteLine($"Manager Report: {reportVisitor.Report}");

Console.WriteLine("\nPatron Visitor implementado exitosamente!");
Console.WriteLine("Presiona cualquier tecla para salir...");
Console.ReadKey();