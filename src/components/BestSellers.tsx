import { BestSellersChart } from "./charts/BestSellersChart"
const BestSellers = () => {
  return (
    <div className="p-5">
      <div className="bg-crust p-3 rounded-2xl shadow-lg shadow-slate-200" >
        <BestSellersChart />
      </div>
    </div>
  )
}

export default BestSellers
