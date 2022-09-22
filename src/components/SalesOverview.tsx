import { SalesOverviewChart } from "./charts/SalesOverviewChart"
const SalesOverview = () => {
  return (
    <div className="chart-container">
      <div className="doughnut-chart" >
        <SalesOverviewChart />
      </div>
    </div>
  )
}

export default SalesOverview
