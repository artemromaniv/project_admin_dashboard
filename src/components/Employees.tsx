import { data } from "./data/employeeData";

const Employees = () => {
  return (
    <section className="overflow-x-auto px-0 md:p-5 md:py-15 lg:px-24 xl:px-24">
      <div className="p-3 w-full bg-white rounded-xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div>Employee</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Position</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Status</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Salary</div>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm divide-y divide-gray-200">
              {data.map((employee) => (
                <tr key={employee.employee}>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-bold text-gray-800">
                      {employee.employee}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">
                      {employee.position}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-meduim text-gray-800">
                      {employee.email}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-meduim text-gray-800">
                      {employee.status}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-meduim text-gray-800">
                      {employee.salary}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Employees;
