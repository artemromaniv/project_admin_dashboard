import './App.css'
import { NavBar, Home, Employees, Customers, Orders, BudgetSales, YearlyIncome, SalesOverview, BestSellers } from './components'
import { Routes, Route } from 'react-router'
const App = () => {

  return (
    <div className="App">
      <div className="nav-container">
        <NavBar/>
      </div>
      <div className="main">
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='employees' element = {<Employees/>}/>
          <Route path='customers' element = {<Customers/>}/>
          <Route path='orders' element = {<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
