namespace EmployeeVisitorPattern
{
    public abstract class Employee : IVisitable
    {
        public string Name { get; set; }
        public decimal Salary { get; set; }

        public abstract void Accept(IVisitor visitor);
    }
}