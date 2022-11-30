import { data } from "./data/customerData";

{
  /* <tr key={customer.key}>
<td>{customer.name}</td>
<td>{customer.email}</td>
<td>{customer.location}</td>
<td>{customer.lastActive}</td>
</tr> */
}

const Customers = () => {
  return (
    <section className="overflow-x-auto px-0 md:p-5 md:py-15 lg:px-24 xl:px-24">
      <div className="p-3 w-full bg-white rounded-xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div>Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Location</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Last Active</div>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm divide-y divide-gray-200">
              {data.map((customer) => (
                <tr key={customer.key}>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-bold text-gray-800">
                      {customer.name}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">
                      {customer.email}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-meduim text-gray-800">
                      {customer.location}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-meduim text-gray-800">
                      {customer.lastActive}
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

export default Customers;
