import { Content } from "antd/lib/layout/layout"
import { SalesOverviewChart } from "./charts/SalesOverviewChart"
const SalesOverview = () => {
  return (
    <Content className="chart-container">
      <SalesOverviewChart />
    </Content>
  )
}

export default SalesOverview
