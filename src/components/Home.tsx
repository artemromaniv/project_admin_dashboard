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

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sales = getRandomInt(64000, 134000);
const expenses = getRandomInt(20000, 45000);
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
    <section className="p-5">
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
    </section>
  );
};

export default Home;
