import { data } from "./data/employeeData";

const Employees = () => {
  return (
    <section className="overflow-x-auto p-5">
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
        <tbody className="rounded-xl">
          {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
          {data.map((employee) => (
            <tr key={employee.employee}>
              <td>{employee.employee}</td>
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
