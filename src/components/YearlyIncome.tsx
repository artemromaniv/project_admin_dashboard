import { Content } from "antd/lib/layout/layout"
import { YearlyIncomeChart } from "./charts/YearlyIncomeChart"
const YearlyIncome = () => {
  return (
    <Content className="chart-container">
      <div className="chart" >
        <YearlyIncomeChart />
      </div>
    </Content>
  )
}

export default YearlyIncome
