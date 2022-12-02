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
      <div className="h-8" />
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
        <div className="bg-crust  w-full rounded-2xl shadow-lg shadow-slate-200 col-span-2 p-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
          laborum recusandae aliquam, unde eos dolorum perferendis quasi alias
          vitae, explicabo voluptatum quam quidem dignissimos molestias pariatur
          doloribus consectetur totam. Rerum!
        </div>
        <div className="bg-crust  w-full rounded-2xl shadow-lg shadow-slate-200 col-span-2 p-5 flex flex-col justify-between">
          <h3>Revenue generated</h3>
          <progress
            className="progress progress-primary w-full h-8"
            value="70"
            max="100"
          >
          </progress>
        </div>
      </div>
      <div className="h-8" />
      <div className="bg-crust  w-full rounded-2xl shadow-lg shadow-slate-200 p-5 h-[240px]">
        <RevenueChart />
      </div>
    </section>
  );
};

export default Home;
