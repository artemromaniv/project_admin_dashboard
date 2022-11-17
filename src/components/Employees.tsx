import { data } from "./data/employeeData";

const Employees = () => {
  return (
    <section className="overflow-x-auto">
      <table className="table w-full overflow-y-scroll">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Email</th>
            <th>Status</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
          {data.map((employee) => (
            <tr key={employee.employee}>
              <th>{employee.employee}</th>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>{employee.status}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Employees;
