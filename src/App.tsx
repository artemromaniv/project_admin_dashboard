import "./App.css";
import { useState } from "react";
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
import { Chart, registerables } from "chart.js";
import { useStateContext } from "./contexts/ContextProvider";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  createStyles,
  Paper,
} from "@mantine/core";
import ColorSchemeToggle from "./components/ColorSchemeToggle";
Chart.register(...registerables);

const useStyles = createStyles((theme) => ({
  App: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    overflow: "hidden",
  },
  nav_container: {},
  main: {
    width: "100%",
  },
}));

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const { classes } = useStyles();
  const { collapsed } = useStateContext();
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <div className={classes.App}>
          {!collapsed && <NavBar />}
          <div className={classes.main}>
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
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
