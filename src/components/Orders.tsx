import {data} from './data/ordersData'

const Orders = () => {
  return (
    <section className="overflow-x-auto">
      <table className="table w-full overflow-y-scroll">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order</th>
            <th>Customer</th>
            <th>Price</th>
            <th>Date of Shipping</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.key}>
              <td>{order.orderID}</td>
              <td>{order.order}</td>
              <td>{order.customer}</td>
              <td>{order.deliveryPricing}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.deliveryStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Orders