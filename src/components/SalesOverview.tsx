import { Content } from "antd/lib/layout/layout"
import { SalesOverviewChart } from "./charts/SalesOverviewChart"
const SalesOverview = () => {
  return (
    <Content className="chart-container">
      <div className="doughnut-chart" >
        <SalesOverviewChart />
      </div>
    </Content>
  )
}

export default SalesOverview
