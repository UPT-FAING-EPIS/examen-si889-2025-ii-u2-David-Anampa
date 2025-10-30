namespace EmployeeVisitorPattern
{
    public class Manager : Employee
    {
        public int TeamSize { get; set; }

        public override void Accept(IVisitor visitor)
        {
            visitor.Visit(this);
        }
    }
}