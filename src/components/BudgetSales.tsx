import BudgetSalesChart  from "./charts/BudgetSalesChart"

const BudgetSales = () => {
  return (
    <div className="px-2 md:p-5 md:py-15 lg:px-24 xl:px-24" >
      <div className="bg-crust rounded-2xl shadow-lg shadow-slate-200 h-[480px] md:h-[720px] xl:h-[840px]">
        <BudgetSalesChart />
      </div>
    </div>
  )
}

export default BudgetSales
