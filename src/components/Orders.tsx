import { useState } from 'react';

import {data} from './data/ordersData'




const Orders = () => {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.orderID}>
      <td>{row.orderID}</td>
      <td>{row.order}</td>
      <td>{row.deliveryDate}</td>
      <td>{row.customer}</td>
      <td>{row.deliveryPricing}</td>
      <td>{row.deliveryStatus}</td>
    </tr>
  ))

  return (
    <div>

    </div>
  )
}

export default Orders
