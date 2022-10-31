import { YearlyIncomeChart } from "./charts/YearlyIncomeChart"
const YearlyIncome = () => {
  return (
    <div className="p-5">
      <div className="bg-crust p-5 rounded-2xl shadow-lg shadow-slate-200" >
        <YearlyIncomeChart />
      </div>
    </div>
  )
}

export default YearlyIncome
