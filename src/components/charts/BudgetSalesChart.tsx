import { Bar } from "react-chartjs-2";

const lables:string[] =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec'];
const data = {
    labels:lables,
    datasets:[
        {
        label:'Budget',
        backgroundColor:[ '#352FC5'],
        data: [1,2,3,4,5,6,7,8,9,10,11,12],
        },
        {
        label:'Sales',
        backgroundColor:[ '#C26F7A'],
        data: [4,6,8,7,9,16,24,18,27,35,41,52],
        },
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
}
export const BudgetSalesChart = () => {
  return (
    <Bar options={options}  data={data} height = {'100%'} />
  )
}