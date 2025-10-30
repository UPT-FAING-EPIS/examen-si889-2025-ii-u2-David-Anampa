namespace EmployeeVisitorPattern
{
    public class ReportVisitor : IVisitor
    {
        public string Report { get; private set; }

        public void Visit(Developer developer)
        {
            Report = $"Developer: {developer.Name}, Language: {developer.ProgrammingLanguage}, Salary: {developer.Salary}";
        }

        public void Visit(Manager manager)
        {
            Report = $"Manager: {manager.Name}, Team Size: {manager.TeamSize}, Salary: {manager.Salary}";
        }
    }
}