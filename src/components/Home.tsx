import { ReactNode } from "react";
import {
  UserPlus,
  Discount2,
  Receipt2,
  Coin,
  ArrowUpRight,
  ArrowDownRight,
  Icon,
} from "tabler-icons-react";
import RevenueChart from "./charts/RevenueChart";

// generating random values for mockup
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sales = getRandomInt(640000, 1340000);
const expenses = getRandomInt(120000, 345000);
const income = sales - expenses;
const newClients = getRandomInt(5000, 15000);

type CardProps = {
  title: string;
  value: string;
  icon: ReactNode;
};

const Card = ({ title, value, icon }: CardProps) => {
  return (
    <div className="bg-crust p-5 flex flex-col justify-between gap-4 rounded-2xl shadow-lg shadow-slate-200 font-bold">
      <div className="flex justify-between items-center text-gray-400">
        <span className="text-gray-900 text-xs">{title.toUpperCase()}</span>
        {icon}
      </div>
      <span className="text-2xl">{value}</span>
    </div>
  );
};

const Home = () => {
  return (
    <section className="px-2 md:p-5 md:py-15 lg:px-24 xl:px-24">
      {/* Grid with stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <Card
          title="Total sales"
          value={sales.toString() + " $"}
          icon={<Receipt2 />}
        />
        <Card
          title="Total Expenses"
          value={expenses.toString() + " $"}
          icon={""}
        />
        <Card
          title="Total Income"
          value={income.toString() + " $"}
          icon={<Coin />}
        />
        <Card
          title="New Clients"
          value={newClients.toString()}
          icon={<UserPlus />}
        />
      </div>
      {/* Revenue chart and Total Revenue progress */}
      <div className="h-8" />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="bg-crust  w-full rounded-2xl shadow-lg shadow-slate-200 col-span-1 p-5 flex flex-col items-center">
          <h3>Total Revenue</h3>
          <div className="h-8" />
          <div
            className="radial-progress text-primary text-2xl"
            // @ts-ignore
            style={{
              "--value": "70",
              "--size": "12rem",
              "--thickness": "1.3rem",
            }}
          >
            70%
          </div>
        </div>
        <div className="bg-crust  w-full rounded-2xl shadow-lg shadow-slate-200 xl:col-span-2 p-5">
          <RevenueChart />
        </div>
      </div>
    </section>
  );
};

export default Home;
