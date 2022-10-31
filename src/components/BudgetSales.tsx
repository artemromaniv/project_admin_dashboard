import { BudgetSalesChart } from "./charts/BudgetSalesChart"

const BudgetSales = () => {
  return (
    <div className="p-5" >
      <div className="bg-crust p-5 rounded-2xl shadow-lg shadow-slate-200">
        <BudgetSalesChart />
      </div>
    </div>
  )
}

export default BudgetSales
