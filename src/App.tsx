import {
  NavBar,
  Header,
  Home,
  Employees,
  Customers,
  Orders,
  BudgetSales,
  YearlyIncome,
  SalesOverview,
  BestSellers,
} from "./components";
import { Routes, Route } from "react-router";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { collapsed } = useStateContext();

  return (
    <div className="w-full">
      <NavBar />
      <div className={collapsed ? "" : "blur"}>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="employees" element={<Employees />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="budget-sales" element={<BudgetSales />} />
            <Route path="yearly-income" element={<YearlyIncome />} />
            <Route path="sales-overview" element={<SalesOverview />} />
            <Route path="best-sellers" element={<BestSellers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
