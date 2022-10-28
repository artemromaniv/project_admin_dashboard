import { Line } from "react-chartjs-2";

const lables:number[] =[2016,2017,2019,2020,2021,2022];
const data = {
    labels:lables,
    datasets:[{
        label:'Yearly Income',
        backgroundColor:[ '#352FC5'],
        data: [960178,1008890,1104090,1040673, 950593,1102846,1200000,800000],
    }]
}

const options = {
    responsive: true,
    maintainAspectRatio: true,
}

export const YearlyIncomeChart = () => {
    return <Line options={options}  data={data} height = {'100%'} />
}