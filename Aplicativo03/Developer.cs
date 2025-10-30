namespace EmployeeVisitorPattern
{
    public class Developer : Employee
    {
        public string ProgrammingLanguage { get; set; }

        public override void Accept(IVisitor visitor)
        {
            visitor.Visit(this);
        }
    }
}