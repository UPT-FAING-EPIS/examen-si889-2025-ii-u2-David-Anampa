namespace EmployeeVisitorPattern
{
    public interface IVisitor
    {
        void Visit(Developer developer);
        void Visit(Manager manager);
    }
}