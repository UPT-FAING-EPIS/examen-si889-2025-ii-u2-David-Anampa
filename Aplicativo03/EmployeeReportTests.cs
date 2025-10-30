using Xunit;

namespace EmployeeVisitorPattern.Tests
{
    public class EmployeeReportTests
    {
        [Fact]
        public void Should_Generate_Developer_Report()
        {
            var dev = new Developer
            {
                Name = "Alice",
                Salary = 80000,
                ProgrammingLanguage = "C#"
            };

            var visitor = new ReportVisitor();
            dev.Accept(visitor);

            Assert.Equal("Developer: Alice, Language: C#, Salary: 80000", visitor.Report);
        }

        [Fact]
        public void Should_Generate_Manager_Report()
        {
            var mgr = new Manager
            {
                Name = "Bob",
                Salary = 100000,
                TeamSize = 5
            };

            var visitor = new ReportVisitor();
            mgr.Accept(visitor);

            Assert.Equal("Manager: Bob, Team Size: 5, Salary: 100000", visitor.Report);
        }

        [Fact]
        public void Should_Handle_Multiple_Employees_With_Same_Visitor()
        {
            var dev = new Developer
            {
                Name = "Charlie",
                Salary = 75000,
                ProgrammingLanguage = "Python"
            };

            var mgr = new Manager
            {
                Name = "Diana",
                Salary = 120000,
                TeamSize = 8
            };

            var visitor = new ReportVisitor();

            dev.Accept(visitor);
            var devReport = visitor.Report;

            mgr.Accept(visitor);
            var mgrReport = visitor.Report;

            Assert.Equal("Developer: Charlie, Language: Python, Salary: 75000", devReport);
            Assert.Equal("Manager: Diana, Team Size: 8, Salary: 120000", mgrReport);
        }
    }
}