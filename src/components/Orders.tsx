import { useState } from 'react';
import { createStyles, Table, ScrollArea } from '@mantine/core';
import {data} from './data/ordersData'
const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}))



const Orders = () => {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.key}>
      <td>{row.orderID}</td>
      <td>{row.order}</td>
      <td>{row.deliveryDate}</td>
      <td>{row.customer}</td>
      <td>{row.deliveryPricing}</td>
      <td>{row.deliveryStatus}</td>
    </tr>
  ))

  return (
    <ScrollArea sx={{ height: 700 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>ID</th>
            <th>Order</th>
            <th>Delivery date</th>
            <th>Customer</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  )
}

export default Orders
