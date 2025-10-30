namespace EmployeeVisitorPattern
{
    public interface IVisitable
    {
        void Accept(IVisitor visitor);
    }
}