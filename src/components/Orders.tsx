import { data } from "./data/ordersData";

const statusColor = (status: string) => {
  if (status === "Continue") {
    return "bg-yellow-300";
  } else if (status === "Delivered") {
    return "bg-green-300";
  } else {
    return "bg-red-300";
  }
};

const Orders = () => {
  return (
    <section className="overflow-x-auto px-0 md:p-5 md:py-15 lg:px-24 xl:px-24">
      <div className="p-3 w-full bg-white rounded-xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div>Order ID</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Order</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Customer</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Price</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Date of shipping</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div>Status</div>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm divide-y divide-gray-200">
              {data.map((order) => (
                <tr key={order.key}>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-bold text-gray-800">
                      {order.orderID}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">
                      {order.order}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-meduim text-gray-800">
                      {order.customer}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-meduim text-gray-800">
                      {order.deliveryPricing}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-meduim text-gray-800">
                      {order.deliveryDate}
                    </div>
                  </td>
                  <td
                    className={`p-4 whitespace-nowrap ${statusColor(
                      order.deliveryStatus
                    )}`}
                  >
                    <div className="font-meduim text-gray-800">
                      {order.deliveryStatus}
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

export default Orders;
