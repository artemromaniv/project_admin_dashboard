import { Content } from "antd/lib/layout/layout"
import { BudgetSalesChart } from "./charts/BudgetSalesChart"

const BudgetSales = () => {
  return (
    <Content className="chart-container" >
      <div className="chart">
        <BudgetSalesChart />
      </div>
    </Content>
  )
}

export default BudgetSales
