import { data } from "./data/customerData";
const Customers = () => {
  return (
    <section className="overflow-x-auto p-5">
      <table className="table w-full overflow-y-scroll">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody >
          {data.map((customer) => (
            <tr key={customer.key}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.location}</td>
              <td>{customer.lastActive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Customers;
