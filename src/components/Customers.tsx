import { data } from "./data/customerData";
const Customers = () => {
  return (
    <section className="overflow-x-auto">
      <table className="table w-full overflow-y-scroll">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer) => (
            <tr key={customer.key}>
              <th>{customer.name}</th>
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
