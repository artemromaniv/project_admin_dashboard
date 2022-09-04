import { Pie } from "react-chartjs-2";

const lables:string[] =[
    'Japan',
    'United States',
    'United Kingdom',
    'Germany',
    'Austria'
];
const data = {
    labels:lables,
    datasets:[{
        label:'rabdom data',
        backgroundColor:[ '#000000','#ffffff'],
        data: [100,100,100,100, 200],
    }]
}

const options = {
    responsive: true,
    maintainAspectRatio: true,
}

export const SalesOverviewChart = () => {
    return <Pie options={options}  data={data} />
}