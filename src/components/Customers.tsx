import {Table } from "antd"
import { Content } from "antd/lib/layout/layout"
import {data,columns} from './data/CustumerData'
const Customers = () => {
  return (
    <Content className="customer-table-container">
      <Table dataSource={data} columns = {columns}/>
    </Content>
  )
}

export default Customers
