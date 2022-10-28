import { useState } from 'react';
import {data} from './data/customerData'



const Customers = () => {


  const rows = data.map((row) => (
    <tr key={row.key}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.location}</td>
      <td>{row.lastActive}</td>
    </tr>
  ))

  return (
<div>

</div>
  )
}

export default Customers
