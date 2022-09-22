import './App.css'
import { NavBar, Header, Home, Employees, Customers, Orders, BudgetSales, YearlyIncome, SalesOverview, BestSellers } from './components'
import { Routes, Route } from 'react-router'
import { Chart, registerables } from 'chart.js'
import { useStateContext } from './contexts/ContextProvider'
import { createStyles } from '@mantine/core'
Chart.register(...registerables)

const useStyles = createStyles((theme) => ({
  App:{
    display:'flex',
    overflow:'hidden'
  },
  nav_container:{
    background:theme.colorScheme === 'light' ? '#ffffff' : '#1D1C25'
  },
  main:{
    width:'100%',
    background:theme.colorScheme === 'light' ? '#F0F2F7' : '#000000'
  }

}))

const App = () => {
  const {classes} = useStyles()
  const {collapsed} = useStateContext();

  return (
    <div className={classes.App}>
      {!collapsed && (
        <div className={classes.nav_container}>
          <NavBar/>
        </div>
      )
      }

      <div className={classes.main}>
        <Header/>
        <div>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='employees' element = {<Employees data={[]}/>}/>
            <Route path='customers' element = {<Customers/>}/>
            <Route path='orders' element = {<Orders/>}/>
            <Route path='budget-sales' element = {<BudgetSales/>}/>
            <Route path='yearly-income' element = {<YearlyIncome/>}/>
            <Route path='sales-overview' element = {<SalesOverview/>}/>
            <Route path='best-sellers' element = {<BestSellers/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
