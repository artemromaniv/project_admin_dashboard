import './App.css'
import { NavBar, Header, Home, Employees, Customers, Orders, BudgetSales, YearlyIncome, SalesOverview, BestSellers } from './components'
import { Routes, Route } from 'react-router'
import { Layout, Menu } from 'antd';
import { Chart, registerables } from 'chart.js'
import { useStateContext } from './contexts/ContextProvider'
Chart.register(...registerables)


const App = () => {

  const {collapsed} = useStateContext();

  return (
    <div className="App">
      {!collapsed && (
        <div className="nav-container">
          <NavBar/>
        </div>
      )
      }

      <div className="main">
        <Header/>
        <Layout>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='employees' element = {<Employees/>}/>
            <Route path='customers' element = {<Customers/>}/>
            <Route path='orders' element = {<Orders/>}/>
            <Route path='budget-sales' element = {<BudgetSales/>}/>
            <Route path='yearly-income' element = {<YearlyIncome/>}/>
            <Route path='sales-overview' element = {<SalesOverview/>}/>
            <Route path='best-sellers' element = {<BestSellers/>}/>
          </Routes>
        </Layout>
      </div>
    </div>
  )
}

export default App
