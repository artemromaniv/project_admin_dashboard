import { Content } from "antd/lib/layout/layout"
import { BestSellersChart } from "./charts/BestSellersChart"
const BestSellers = () => {
  return (
    <Content className="chart-container">
      <div className="chart" >
        <BestSellersChart />
      </div>
    </Content>
  )
}

export default BestSellers
