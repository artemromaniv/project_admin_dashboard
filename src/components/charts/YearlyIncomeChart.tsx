import { Line } from "react-chartjs-2";

const lables:number[] =[2016,2017,2019,2020,2021,2022];
const data = {
    labels:lables,
    datasets:[{
        label:'Yearly Income',
        backgroundColor:[ '#000000'],
        data: [660178,708890,1104090,1040673, 910593,1202846],
    }]
}

const options = {
    responsive: true,
    maintainAspectRatio: true,
}

export const YearlyIncomeChart = () => {
    return <Line options={options}  data={data} />
}