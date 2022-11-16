const getRandomInt = (min:number, max:number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const styles = {
  card:'bg-crust p-5 flex flex-col gap-4 rounded-2xl shadow-lg shadow-slate-200 font-bold'
}

const sales = getRandomInt(64000,134000)
const expenses = getRandomInt(20000,45000)
const income = sales - expenses
const newClients = getRandomInt(5000,15000)

const Home = () => {
  return (
    <section className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className={styles.card}>
          <span>Total Sales</span>
          <span className="text-3xl">{sales} $</span>
        </div>
        <div className={styles.card}>
          <span>Total Expenses</span>
          <span className="text-3xl">{expenses} $</span>
        </div>
        <div className={styles.card}>
          <span>Total Income</span>
          <span className="text-3xl">{income} $</span>
        </div>
        <div className={styles.card}>
          <span>New Clients</span>
          <span className="text-3xl">+ {newClients}</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
