import {Table } from "antd"
import { Content } from "antd/lib/layout/layout"
import {data,columns} from './data/customerData'
const Customers = () => {
  return (
    <Content className="table-container">
      <Table dataSource={data} columns = {columns}/>
    </Content>
  )
}

export default Customers
